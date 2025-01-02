'use client';

import {useTranslations} from 'next-intl';
import s from './Experience.module.css';
import Modal from '../Modal/Modal';
import {useState} from 'react';
import RegistrationForm from '../UI/RegistrationForm/RegistrationForm';

export function Experience() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const t = useTranslations('IndexPage');

  const toggleModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <div className={`container ${s.experience__container}`}>
      <div className={s.experience__left}>
        <h1 className={s.experience__title}>{t('title')}</h1>
        <p className={s.experience__text}>{t('description')}</p>
        <button
          className={`button ${s.experience__button}`}
          type="button"
          onClick={toggleModal}
        >
          {t('button')}
        </button>
        {isOpenModal && (
          <Modal close={toggleModal}>
            <RegistrationForm />
          </Modal>
        )}
      </div>
      <div className={s.experience__right}>
        <div className={s.experience__right_img_front}>
          <div className={s.experience__right_img_front_png}></div>
          <svg className={s.experience__right_svg}>
            <use href="/symbol-defs.svg#icon-kolibry_studio" />
          </svg>
        </div>
      </div>
    </div>
  );
}
