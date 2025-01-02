import TrainingSection from './TrainingSection/TrainingSection';
import s from './TrainingCourses.module.css';
import {useTranslations} from 'next-intl';

export default function TrainingCourses() {
  const t = useTranslations('training');

  const section_1 = {
    titleHead: t('section_1.section_title'),
    button: t('section_1.button'),
    data: [
      {
        title: t('section_1.section_text_head.0'),
        text: t('section_1.section_text.0')
      },
      {
        title: t('section_1.section_text_head.1'),
        text: t('section_1.section_text.1')
      },
      {
        title: t('section_1.section_text_head.2'),
        text: t('section_1.section_text.2')
      },
      {
        title: t('section_1.section_text_head.3'),
        text: t('section_1.section_text.3')
      },
      {
        title: t('section_1.section_text_head.4'),
        text: t('section_1.section_text.4')
      }
    ]
  };

  const section_2 = {
    titleHead: t('section_2.section_title'),
    button: t('section_2.button'),
    data: [
      {
        title: t('section_2.section_text_head.0'),
        text: t('section_2.section_text.0')
      },
      {
        title: t('section_2.section_text_head.1'),
        text: t('section_2.section_text.1')
      },
      {
        title: t('section_2.section_text_head.2'),
        text: t('section_2.section_text.2')
      },
      {
        title: t('section_2.section_text_head.3'),
        text: t('section_2.section_text.3')
      }
    ]
  };

  const section_3 = {
    titleHead: t('section_3.section_title'),
    button: t('section_3.button'),
    data: [
      {
        title: t('section_3.section_text_head.0'),
        text: t('section_3.section_text.0')
      },
      {
        title: t('section_3.section_text_head.1'),
        text: t('section_3.section_text.1')
      },
      {
        title: t('section_3.section_text_head.2'),
        text: t('section_3.section_text.2')
      },
      {
        title: t('section_3.section_text_head.3'),
        text: t('section_3.section_text.3')
      }
    ]
  };

  return (
    <div className={`container ${s.training__container}`}>
      <h2 className={s.training__title_h2}>{t('title')}</h2>
      <h3 className={s.training__title_h3}>{t('title_2')}</h3>
      <p className={s.training__text_head}>{t('description')}</p>
      <div className={s.training__section_block}>
        <TrainingSection
          sections={section_1.data}
          titleHead={section_1.titleHead}
          button={section_1.button}
        />
        <TrainingSection
          sections={section_2.data}
          titleHead={section_2.titleHead}
          button={section_2.button}
        />
        <TrainingSection
          sections={section_3.data}
          titleHead={section_3.titleHead}
          button={section_3.button}
        />
      </div>
      <div className={s.training__wrap_descr}>
        <h4 className={s.training__title_h4}>{t('title_3')}</h4>
        <ul className={s.training__list}>
          <li className={s.training__item}>{t('descr_3.0')}</li>
          <li className={s.training__item}>{t('descr_3.1')}</li>
          <li className={s.training__item}>{t('descr_3.2')}</li>
        </ul>
      </div>
      <div className={s.training__wrap_descr}>
        <h4 className={s.training__title_h4}>{t('title_4')}</h4>
        <ul className={s.training__list}>
          <li className={s.training__item}>{t('descr_4.0')}</li>
          <li className={s.training__item}>{t('descr_4.1')}</li>
          <li className={s.training__item}>{t('descr_4.2')}</li>
          <li className={s.training__item}>{t('descr_4.3')}</li>
        </ul>
      </div>
    </div>
  );
}
