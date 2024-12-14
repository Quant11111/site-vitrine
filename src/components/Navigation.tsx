import {useTranslations} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <div className="border-b-2 bg-black">
      <nav className="container flex justify-between p-2 text-white">
        <div>
          <NavigationLink href="/">{t('home')}</NavigationLink>
          <NavigationLink href="/showcase">{t('showcase')}</NavigationLink>
          <NavigationLink href="/about">{t('about')}</NavigationLink>
          <NavigationLink href="/pricing">{t('pricing')}</NavigationLink>
          <NavigationLink href="/contact">{t('contact')}</NavigationLink>
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
