import {motion} from 'framer-motion';
import React from 'react';
import s from './Acordion.module.css';

type AccordionProps = {
  title: string;
  content: string;
  isOpen: boolean; // Новый пропс для проверки состояния
  onToggle: () => void; // Новый пропс для переключения
};

export function AccordionItem({
  content,
  isOpen,
  onToggle,
  title
}: AccordionProps) {
  return (
    <div className={s.accordion__wraper}>
      <div
        className={s.accordion__togle}
        onClick={onToggle} // Используем функцию переключения из пропсов
        onKeyDown={(e) => e.key === 'Enter' && onToggle()}
        role="button"
        tabIndex={0}
      >
        <h3 className={s.accordion__toggle_title}>{title}</h3>
        <div>
          <svg
            className={
              isOpen
                ? `${s.accordion__icon_arrow}`
                : `${s.accordion__icon_arrow_top}`
            }
          >
            <use href="/symbol-defs.svg#icon-arrow_bottom" />
          </svg>
        </div>
      </div>

      {isOpen && (
        <motion.div
          animate={{height: 'auto', opacity: 1}}
          className={s.isOpen}
          exit={{height: 0, opacity: 0}}
          initial={{height: 0, opacity: 0}}
          style={{overflow: 'hidden'}}
          transition={{duration: 0.3}}
        >
          <motion.div
            animate={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: 10}}
            transition={{delay: 0.2, duration: 0.3}}
          >
            {content}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
