import React, { useState } from 'react';
import './counter.css';

type CounterPropsType = {
  image?: string;
  title: string;
  count?: number;
  price?: number;
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
  return (
    <div className="counter_wrapper">
      <div>
        <img src={image} width="200px" alt="img" />
      </div>
      <h1>{title}</h1>
      <h1>{price} р.</h1>
      <div className="counter_wrapper_value">
        <h2>{count}</h2>
        <div className="button_wrapper">
          <button className="button_count" onClick={incrementHandler}>
            +
          </button>
          <button disabled={count === 0} className="button_count" onClick={decrementHandler}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};
