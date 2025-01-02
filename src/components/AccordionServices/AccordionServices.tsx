'use client';

import {useTranslations} from 'next-intl';
import {useState} from 'react';
import {AccordionItem} from './AccordionServicesItem';
import s from './AccordionServices.module.css';

export function AccordionServices() {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const t = useTranslations('AccordionServices');

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const sections = [
    {
      title: t('title.0'),
      contents: [
        {
          method: t('content_1.method.0'),
          duration: t('content_1.duration.0'),
          price: t('content_1.price.0')
        },
        {
          method: t('content_1.method.1'),
          duration: t('content_1.duration.1'),
          price: t('content_1.price.1')
        },
        {
          method: t('content_1.method.2'),
          duration: t('content_1.duration.2'),
          price: t('content_1.price.2')
        },
        {
          method: t('content_1.method.3'),
          duration: t('content_1.duration.3'),
          price: t('content_1.price.3')
        },
        {
          method: t('content_1.method.4'),
          duration: t('content_1.duration.4'),
          price: t('content_1.price.4')
        },
        {
          method: t('content_1.method.5'),
          duration: t('content_1.duration.5'),
          price: t('content_1.price.5')
        },
        {
          method: t('content_1.method.6'),
          duration: t('content_1.duration.6'),
          price: t('content_1.price.6')
        },
        {
          method: t('content_1.method.7'),
          duration: t('content_1.duration.7'),
          price: t('content_1.price.7')
        },
        {
          method: t('content_1.method.8'),
          duration: t('content_1.duration.8'),
          price: t('content_1.price.8')
        },
        {
          method: t('content_1.method.9'),
          duration: t('content_1.duration.9'),
          price: t('content_1.price.9')
        },
        {
          method: t('content_1.method.10'),
          duration: t('content_1.duration.10'),
          price: t('content_1.price.10')
        },
        {
          method: t('content_1.method.11'),
          duration: t('content_1.duration.11'),
          price: t('content_1.price.11')
        }
      ],
      button: t('button')
    },
    {
      title: t('title.1'),
      contents: [
        {
          method: t('content_2.method.0'),
          duration: t('content_2.duration.0'),
          price: t('content_2.price.0')
        },
        {
          method: t('content_2.method.1'),
          duration: t('content_2.duration.1'),
          price: t('content_2.price.1')
        }
      ],
      button: t('button')
    },
    {
      title: t('title.2'),
      contents: [
        {
          method: t('content_3.method.0'),
          duration: t('content_3.duration.0'),
          price: t('content_3.price.0')
        },
        {
          method: t('content_3.method.1'),
          duration: t('content_3.duration.1'),
          price: t('content_3.price.1')
        },
        {
          method: t('content_3.method.0'),
          duration: t('content_3.duration.0'),
          price: t('content_3.price.0')
        },
        {
          method: t('content_3.method.1'),
          duration: t('content_3.duration.1'),
          price: t('content_3.price.1')
        },
        {
          method: t('content_3.method.0'),
          duration: t('content_3.duration.0'),
          price: t('content_3.price.0')
        }
      ],
      button: t('button')
    },
    {
      title: t('title.3'),
      contents: [
        {
          method: t('content_4.method.0'),
          duration: t('content_4.duration.0'),
          price: t('content_4.price.0')
        },
        {
          method: t('content_4.method.1'),
          duration: t('content_4.duration.1'),
          price: t('content_4.price.1')
        }
      ],
      button: t('button')
    }
  ];

  function handleToggle(index: number) {
    setOpenIndex(openIndex === index ? null : index); // Закрываем, если кликнули на уже открытый
  }

  return (
    <div className={`container ${s.accordion__container}`}>
      <div className={s.accordion__section}>
        <h2 className={s.accordion__title}>{t('header_title')}</h2>
        {sections.map((section, index) => (
          <AccordionItem
            key={index}
            button={section.button}
            contents={section.contents}
            isOpen={openIndex === index} // Проверяем, открыт ли этот элемент
            onToggle={() => handleToggle(index)} // Передаём функцию для переключения
            title={section.title}
          />
        ))}
      </div>
    </div>
  );
}
