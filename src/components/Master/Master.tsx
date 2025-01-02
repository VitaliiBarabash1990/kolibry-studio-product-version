import {useTranslations} from 'next-intl';
import s from './Master.module.css';

export function Master() {
  const t = useTranslations('Master');

  return (
    <div id="About" className={`container ${s.master__container}`}>
      <div className={s.master__}>
        <h2 className={s.master__title}>{t('title')}</h2>
      </div>
      <div className={s.master__block}>
        <div className={s.master__img}>
          <img alt="master" src="/img/main/image_3_x1.png" />
        </div>
        <div className={s.master__descr}>
          <p className={s.master__text}>{t('description')}</p>
        </div>
      </div>
    </div>
  );
}
