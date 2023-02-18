import { routes } from 'Constants/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss'
export const Header = () => {
  return <header className={style.wrapper}>
    <nav>
      <li><Link to={routes.main}>ГЛАВНАЯ</Link></li>
      <li><Link to={routes.delivery}>ДОСТАВКА</Link></li>
      <li>КОНТАКТЫ</li>
      <li>КОРПОРАТИВНЫМ КЛИЕНТАМ</li>
    </nav>
    <div className={style.logo}>
      <span>Flowers</span>
      </div>
      <div className={style.cart}></div>
  </header>;
};
