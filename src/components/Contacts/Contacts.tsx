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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2638.1624464040215!2d14.248263147007009!3d53.908012830613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa5f339084f441%3A0xc15bbd0d0cc77835!2sArmii%20Krajowej%2012%2F21%2C%2072-600%20%C5%9Awinouj%C5%9Bcie!5e0!3m2!1sen!2spl!4v1739469668901!5m2!1sen!2spl"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <ul className={s.contacts__container_info_list}>
          <li className={s.contacts__container_info_item}>
            <svg className={s.contacts__container_icon}>
              <use href="/symbol-defs.svg#icon-tel" />
            </svg>
            <p className={s.contacts__container_text}>+48 729 265 475</p>
          </li>
          <li className={s.contacts__container_info_item}>
            <svg className={s.contacts__container_icon}>
              <use href="/symbol-defs.svg#icon-oclock" />
            </svg>
            <p className={s.contacts__container_text}>
              {t('schedule')} 08:00 - 20:00
            </p>
          </li>
          <li className={s.contacts__container_info_item}>
            <svg className={s.contacts__container_icon}>
              <use href="/symbol-defs.svg#icon-mail" />
            </svg>
            <p className={s.contacts__container_text}>pretty.emets@gmail.com</p>
          </li>
          <li className={s.contacts__container_info_item}>
            <svg
              className={`${s.contacts__container_icon} ${s.contacts__container_icon_last}`}
            >
              <use href="/symbol-defs.svg#icon-map-pin" />
            </svg>
            <p className={s.contacts__container_text}>
              Armii Krajowej 12, lokal 21, 72-600, Świnoujście
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
