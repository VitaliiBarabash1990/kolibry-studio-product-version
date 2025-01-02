import {useTranslations} from 'next-intl';
import s from './Contacts.module.css';

export function Contacts() {
  const t = useTranslations('contacts');
  return (
    <div className={`container ${s.contacts__container}`}>
      <h2 className={s.contacts__container_title}>{t('title')}</h2>
      <div className={s.contacts__container_section}>
        <iframe
          className={s.contacts__container_map_iframe}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1175.1493202157646!2d14.248164!3d53.9086689!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa5f336dd5cdaf%3A0x2f47c8b410ec2c1c!2zUGxhYyBXb2xub8WbY2ksIDcyLTYwMCDFmndpbm91asWbY2ll!5e0!3m2!1sru!2spl!4v1735329340440!5m2!1sru!2spl"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <ul className={s.contacts__container_info_list}>
          <li className={s.contacts__container_info_item}>
            <svg className={s.contacts__container_icon}>
              <use href="/symbol-defs.svg#icon-tel" />
            </svg>
            <p className={s.contacts__container_text}>+38 (XXX) XXX-XX-XX</p>
          </li>
          <li className={s.contacts__container_info_item}>
            <svg className={s.contacts__container_icon}>
              <use href="/symbol-defs.svg#icon-oclock" />
            </svg>
            <p className={s.contacts__container_text}>
              {t('schedule')} 10:00 - 20:00
            </p>
          </li>
          <li className={s.contacts__container_info_item}>
            <svg className={s.contacts__container_icon}>
              <use href="/symbol-defs.svg#icon-mail" />
            </svg>
            <p className={s.contacts__container_text}>info@вашсайт.com</p>
          </li>
          <li className={s.contacts__container_info_item}>
            <svg
              className={`${s.contacts__container_icon} ${s.contacts__container_icon_last}`}
            >
              <use href="/symbol-defs.svg#icon-map-pin" />
            </svg>
            <p className={s.contacts__container_text}>
              Plać wolnosci Swiności 5/8, Poland, 72-600 Swinoujscie
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
