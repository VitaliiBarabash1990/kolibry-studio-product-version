import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de', 'ua', 'pl'],
  defaultLocale: 'pl',
  pathnames: {
    '/': '/',
    '/services': '/services',
    '/gallery': '/gallery',
    '/courses': '/courses',
    '/contacts': '/contacts'
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createNavigation(routing);
