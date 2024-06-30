import {useLocale, useTranslations} from 'next-intl';
import LocaleSwitcherSelect from '@/components/ui/LocaleSwitcherSelect';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: 'en',
          label: t('en')
        },
        {
          value: 'de',
          label: t('de')
        },
        {
          value: 'ar',
          label: t('ar')
        },
        {
          value: 'es',
          label: t('es')
        },
        {
          value: 'ja',
          label: t('ja')
        },
        {
          value: 'zh',
          label: t('zh')
        },
        {
          value: 'ko',
          label: t('ko')
        }
      ]}
      label={t('label')}
    />
  );
}
