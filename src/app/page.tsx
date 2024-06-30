import {useTranslations} from 'next-intl';
import {redirect} from 'next/navigation';


export default function IndexPage() {
  redirect('/welcome');
  // const t = useTranslations('Index');
  // return <h1>{t('title')}</h1>;
}
