import { routes } from 'Constants/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss'
export const Header = () => {
  return <header className={style.wrapper}>
    <nav>
      <li><Link to={routes.main}>ГЛАВНАЯ</Link></li>
      <li><Link to={routes.delivery}>ДОСТАВКА</Link></li>
      <li><Link to={routes.contacts}>КОНТАКТЫ</Link></li>
      <li><Link to={routes.corporateclients}>КОРПОРАТИВНЫМ КЛИЕНТАМ</Link></li>
    </nav>
    <div className={style.logo}>
    <img className={style.icon_flower} src="icons8-спа-цветок-100.png"/>
      <span>Flowers</span>
      </div>
      <div className={style.wrap_right}>
      <div className={style.wrap_cart}>
      <div><Link to={routes.cart}><img className={style.icon_cart} src="./icon-cart.png"/></Link></div>
      <div className={style.counter_cart}>1</div>
      </div>
      <div className={style.text_auth}>
      <span><Link to={routes.auth}>Вход </Link></span><span>|</span><span><Link to={routes.reg}> Регистрация</Link></span>
      </div>
      </div>
  </header>;
};
