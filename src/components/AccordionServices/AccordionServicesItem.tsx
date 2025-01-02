import {motion} from 'framer-motion';
import React, {useState} from 'react';
import s from './AccordionServices.module.css';
import Modal from '../Modal/Modal';
import RegistrationForm from '../UI/RegistrationForm/RegistrationForm';

type ContentItem = {
  method: string;
  duration: string;
  price: string;
};

type AccordionProps = {
  title: string;
  contents: ContentItem[];
  isOpen: boolean;
  onToggle: () => void;
  button: string;
};

export function AccordionItem({
  contents,
  isOpen,
  onToggle,
  title,
  button
}: AccordionProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <div className={s.accordion__wraper}>
      <div
        className={s.accordion__togle}
        onClick={onToggle}
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
            <ul className={s.services__accordion_list}>
              {contents.map((content, index) => {
                // return <div key={index}>{content.method}</div>;
                return (
                  <li key={index} className={s.services__accordion_item}>
                    <div className={s.services__accordion_info}>
                      <h4 className={s.services__accordion_title}>
                        {content.method}
                      </h4>
                      <p className={s.services__accordion_text}>
                        {content.duration}
                      </p>
                    </div>
                    <div className={s.services__accordion_action}>
                      <p className={s.services__accordion_text_price}>
                        {content.price}
                      </p>
                      <button
                        className={s.services__accordion_button}
                        type="button"
                        onClick={toggleModal}
                      >
                        {button}
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
      {isOpenModal && (
        <Modal close={toggleModal}>
          <RegistrationForm />
        </Modal>
      )}
    </div>
  );
}
