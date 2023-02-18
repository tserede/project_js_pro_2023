import React, { useState } from 'react';
import style from './counter.module.scss';

type CounterPropsType = {
  image?: string;
  title: string;
  count?: number;
  price: number;
};
export const CounterComponent = (props: CounterPropsType) => {
  const { title, image, price } = props;
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };
  const decrementHandler = () => {
    setCount((prev) => prev - 1);
  };
  const sum: number = price * count;
  return (
    <div className={style.counter_wrapper}>
      <div>
        <img src={image} width="262px" alt="img" />
      </div>
      <div className={style.text_wrapper}><span>{title}</span></div>
      <h2 className={style.price}>{sum || price} ₽</h2>
      <div className={style.counter_wrapper_value}>
        <div className={style.button_wrapper}>
          <button disabled={count === 0} className={style.button_count} onClick={decrementHandler}>
            -
          </button>
          <h2>{count}</h2>
          <button className={style.button_count} onClick={incrementHandler}>
            +
          </button>
        </div>
        <button className={style.btn_cart}>В КОРЗИНУ</button>
      </div>
    </div>
  );
};
