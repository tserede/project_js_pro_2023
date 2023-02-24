import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartSelectors, CartCounterSliceActions } from 'Store';
import style from './counter.module.scss';

type CounterPropsType = {
  image?: string;
  title: string;
  count?: number;
  price: number;
};
export const CounterComponent = (props: CounterPropsType) => {
  const { title, image, price } = props;
  const [count, setCount] = useState(1);
  const [isProductAdd, setisProductAdd] = useState(false);
  const dispatch = useDispatch();
  const cartCounter = useSelector(CartSelectors.getCartCounter);

  const addToCard = () => {
    setisProductAdd((prevState) => !prevState);
    if (!isProductAdd) {
      dispatch(CartCounterSliceActions.setIncrementCartCounter({ counter: 1 }));
    } else {
      dispatch(CartCounterSliceActions.setDecrementCartCounter({ counter: 0 }));
    }
    console.log('cartCounter', cartCounter);
  };

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
      <div className={style.text_wrapper}>
        <span>{title}</span>
      </div>
      <h2 className={style.price}>{sum || price} ₽</h2>
      <div className={style.counter_wrapper_value}>
        <div className={style.button_wrapper}>
          <button className={style.button_count} disabled={count === 1} onClick={decrementHandler}>
            -
          </button>
          <h2>{count}</h2>
          <button className={style.button_count} onClick={incrementHandler}>
            +
          </button>
        </div>
        <button className={style.btn_cart} onClick={addToCard}>
          {isProductAdd ? 'УДАЛИТЬ' : 'В КОРЗИНУ'}
        </button>
      </div>
    </div>
  );
};
