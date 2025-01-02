'use client';

import {useTranslations} from 'next-intl';
import {useState} from 'react';
import {AccordionItem} from './AccordionItem';
import s from './Acordion.module.css';

export function Accordion() {
  const t = useTranslations('Accordion');
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Хранит индекс открытого элемента

  const sections = [
    {title: t('title.0'), content: t('content.0')},
    {title: t('title.1'), content: t('content.1')},
    {title: t('title.2'), content: t('content.2')},
    {title: t('title.3'), content: t('content.3')}
  ];

  function handleToggle(index: number) {
    setOpenIndex(openIndex === index ? null : index); // Закрываем, если кликнули на уже открытый
  }

  return (
    <div id="questions" className={`container ${s.accordion__container}`}>
      <div className={s.accordion__section}>
        <h2 className={s.accordion__title}>{t('header_title')}</h2>
        {sections.map((section, index) => (
          <AccordionItem
            key={index}
            content={section.content}
            isOpen={openIndex === index} // Проверяем, открыт ли этот элемент
            onToggle={() => handleToggle(index)} // Передаём функцию для переключения
            title={section.title}
          />
        ))}
      </div>
    </div>
  );
}
