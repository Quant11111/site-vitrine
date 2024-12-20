import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/showcase': {
      en: '/showcase',
      fr: '/vitrine'
    },
    '/pricing': {
      en: '/pricing',
      fr: '/tarification'
    },
    '/contact': {
      en: '/constact',
      fr: '/contact'
    },
    '/getAQuote': {
      en: '/get-a-quote',
      fr: '/obtenir-un-devis'
    },
    '/about': {
      en: '/about',
      fr: '/a-propos'
    }
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createNavigation(routing);
