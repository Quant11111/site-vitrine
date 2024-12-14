import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';

type Props = {
  params: {locale: string};
};

export default function IndexPage({params: {locale}}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('HomePage');

  return (
    <div className="scrollbar-thin relative grow flex-col overflow-y-scroll bg-gradient-to-b from-black to-cyan-950 py-4">
      <div className="container flex flex-col items-center justify-center rounded bg-slate-800 p-4">
        <h1 className="text-3xl font-bold text-white">{t('title')}</h1>
        <h2 className="mt-4 text-white">{t('content introduction')}</h2>
      </div>
    </div>
  );
}
