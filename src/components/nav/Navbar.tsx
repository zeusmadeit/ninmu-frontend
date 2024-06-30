import {useTranslations} from 'next-intl';
import LocaleSwitcher from '@/components/ui/LocaleSwitcher';
import NavLink from './NavLink';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <div className="bg-slate-850">
      <nav className="container flex justify-between p-2 text-white">
        <div>
          <NavLink href="/">{t('home')}</NavLink>
          <NavLink href="/pathnames">{t('pathnames')}</NavLink>
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
