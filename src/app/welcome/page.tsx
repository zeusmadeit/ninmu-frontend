import {useTranslations} from 'next-intl';


export default function LandingPage() {
  const t = useTranslations('Landing');
  return(
    <div>
        <h1>{t('title')}</h1>
    </div>
  );
}
