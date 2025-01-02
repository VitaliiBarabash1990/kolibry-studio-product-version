import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import CustomLink from '../CustomLink/CustomLink';
import s from './Footer.module.css';

export default function Footer() {
  const t = useTranslations('footer');
  return (
    <div className={`container ${s.footer__container}`}>
      <ul className={s.footer__left_list}>
        <li>
          <Link href="/services" rel="stylesheet">
            {t('our_servises')}
          </Link>
        </li>
        <li>
          <Link href="/gallery" rel="stylesheet">
            {t('gallery')}
          </Link>
        </li>
        <li>
          <Link href="/courses" rel="stylesheet">
            {t('courses')}
          </Link>
        </li>
        <li>
          <Link href="/contacts" rel="stylesheet">
            {t('contacts_info')}
          </Link>
        </li>
      </ul>

      <ul className={s.footer__center_list}>
        <li>
          <Link href={{pathname: '/', hash: 'About'}} rel="stylesheet">
            {t('about_master')}
          </Link>
        </li>
        <li>
          <Link href={{pathname: '/', hash: 'my_works'}} rel="stylesheet">
            {t('my_works')}
          </Link>
        </li>
        <li>
          <Link href={{pathname: '/', hash: 'questions'}} rel="stylesheet">
            {t('questions')}
          </Link>
        </li>
      </ul>

      <address className={s.footer__address}>
        <ul className={s.footer__contact}>
          <li className={s.footer__contact_item}>
            <ul className={s.footer__soc_icon}>
              <li>
                <CustomLink href="http://facebook.com">
                  <svg className={s.footer__icon_link_soc}>
                    <use href="/symbol-defs.svg#icon-logos_facebook" />
                  </svg>
                </CustomLink>
              </li>
              <li>
                <CustomLink href="http://instagram.com">
                  <img
                    alt="instagram_icon"
                    className={s.footer__icon_link_soc}
                    src="/instagram.svg"
                  />
                </CustomLink>
              </li>
              <li>
                <CustomLink href="http://telegram.com">
                  <svg className={s.footer__icon_link_soc}>
                    <use href="/symbol-defs.svg#icon-logos_telegram" />
                  </svg>
                </CustomLink>
              </li>
            </ul>
          </li>
          <li className={s.footer__contact_item}>
            <Link
              className={s.footer__contact_link}
              href={'tel:+38 (XXX) XXX-XX-XX' as unknown as '/'}
              rel="stylesheet"
            >
              <svg className={s.footer__icon_link}>
                <use href="/symbol-defs.svg#icon-tel" />
              </svg>
              +38 (XXX) XXX-XX-XX
            </Link>
          </li>
          <li className={s.footer__contact_item}>
            <Link
              className={s.footer__contact_link}
              href={'mailto:info@вашсайт.com' as unknown as '/'}
              rel="stylesheet"
            >
              <svg className={s.footer__icon_link}>
                <use href="/symbol-defs.svg#icon-mail" />
              </svg>
              info@вашсайт.com
            </Link>
          </li>
          <li className={s.footer__contact_item}>
            <Link
              className={s.footer__contact_link}
              href={
                'https://maps.app.goo.gl/DrGRC5HF7QuNUNvf7' as unknown as '/'
              }
              rel="stylesheet"
              target="_blank"
            >
              <svg className={s.footer__icon_link}>
                <use href="/symbol-defs.svg#icon-map-pin" />
              </svg>
              <p className={s.footer__contact_link_text}>
                Plać wolnosci Swiności 5/8, Poland, 72-600 Swinoujscie
              </p>
            </Link>
          </li>
        </ul>
      </address>
    </div>
  );
}
