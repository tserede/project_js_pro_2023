import React from 'react';
import style from './ContactsInfo.module.scss';

export const ContactsInfo = () => {
  return (
    <div className={style.wrapper}>
      <h2>Наши контакты</h2>

<p>+7 (000) 000 00 00</p>
<p>Наш интернет магазин работает 24/7 без выходных</p>
<p>ул. Русская, 5, Нижний Новгород</p>
    </div>
  );
};
