'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';
import NavigationLink from '../NavigationLink/NavigationLink';
import s from './Navigation.module.css';
import BurgerButton from '@/components/UI/BurgerButton/BurgerButton';
import {useEffect, useState} from 'react';
import {NavigationMob} from '../NavigationMob/NavigationMob';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isModal = true;

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
      document.documentElement.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    };
  }, [menuOpen]);
  const t = useTranslations('Navigation');

  return (
    <div className={`container ${s.header__nav}`}>
      <nav className={s.container__header}>
        <Link className={s.Logo} href="/">
          <svg className={s.nav__logo}>
            <use href="/symbol-defs.svg#icon-litvihenko" />
          </svg>
        </Link>
        <div className={s.nav__bar}>
          <div className={s.nav__bar_menu}>
            <NavigationLink href="/">{t('home')}</NavigationLink>
            <NavigationLink href="/services">{t('services')}</NavigationLink>
            <NavigationLink href="/gallery">{t('gallery')}</NavigationLink>
            <NavigationLink href="/courses">{t('courses')}</NavigationLink>
            <NavigationLink href="/contacts">{t('contacts')}</NavigationLink>
          </div>
          <div className={s.local__switcher}>
            <LocaleSwitcher />
          </div>
        </div>
        <div className={s.nav__bar_mob}>
          <div className={s.local__switcher_mob}>
            <LocaleSwitcher />
          </div>
          <div className={s.headerBurgerButton}>
            <BurgerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
        </div>
      </nav>
      <div className={`${s.menu_burger} ${menuOpen ? s.open : ''}`}>
        <NavigationMob isModal={isModal} setMenuOpen={setMenuOpen} />
      </div>
    </div>
  );
}
