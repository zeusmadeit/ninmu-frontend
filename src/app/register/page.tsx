import {UsersIcon} from '@heroicons/react/24/outline';
import {isEqual} from 'lodash';
import {redirect} from 'next/navigation';
import {useLocale, useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import {z} from 'zod';
import RegisterForm from './RegisterForm';
import Button from '@/components/ui/FormButton';
import FormField from '@/components/ui/FormField';
import LocaleSwitcher from '@/components/ui/LocaleSwitcher';
import {registerUser} from '@/services/session';
import DesktopNavigationMenu from '@/components/nav/DesktopNav';
import Image from 'next/image';

const registerFormSchema = z.object({
  username: z.string().min(8),
  email: z.string().email(),
  password: z.string().min(1)
});

type RegisterFormInput = z.infer<typeof registerFormSchema>;

export type RegisterFormErrors = z.typeToFlattenedError<RegisterFormInput>;

export type RegisterFormResult =
  | {
      success: true;
    }
  | {
      success: false;
      errors: RegisterFormErrors;
    };

async function registerAction(
  prev: unknown,
  data: FormData
): Promise<RegisterFormResult> {
  'use server';
  const t = await getTranslations('RegisterPage');
  const values = Object.fromEntries(data);

  const result = await registerFormSchema
    .refine(async (credentials) => registerUser(credentials), {
      message: t('invalidCredentials')
    })
    .safeParseAsync(values, {
      errorMap(issue, ctx) {
        let message;

        if (isEqual(issue.path, ['username'])) {
          message = t('invalidUsername');
        } else if (isEqual(issue.path, ['password'])) {
          message = t('invalidPassword');
        } else if (isEqual(issue.path, ['email'])) {
            message = t('invalidEmail');
        }

        return {message: message || ctx.defaultError};
      }
    });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten()
    };
  } else {
    redirect('/login');
  }
}

export default function RegisterPage() {
  const t = useTranslations('RegisterPage');
  const locale = useLocale();

  return (
    <>
      {/* <DesktopNavigationMenu/> */}
      {/* <div className='flex flex-row w-full items-center'>
        <div>
          <Image src={require('../../../public/images/reg.png')} alt='' sizes='full' />
        </div> */}
        <RegisterForm
          key={locale}
          action={registerAction}
          fields={
            <div className="flex flex-col gap-5">
              <FormField
                label={t('username')}
                name="username"
                placeholder="janedoe17"
                required
                type="username"
              />
              <FormField
                label={t('email')}
                name="email"
                placeholder="jane@doe.com"
                required
                type="email"
              />
              <FormField
                label={t('password')}
                name="password"
                placeholder="••••••••"
                required
                type="password"
              />
            </div>
          }
          header={
            <div className="text-center">
              <UsersIcon className="mx-auto h-14 w-14 text-slate-900" />
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
                {t('title')}
              </h1>
              <p className="mt-2 text-slate-700">{t('description')}</p>
            </div>
          }
          submit={
            <div>
              <Button type="submit">{t('register')}</Button>
              <p className="mt-4 text-center text-sm text-slate-700">
                {t('credentials')}
              </p>
            </div>
          }
        />
      {/* </div> */}
    </>
  );
}

