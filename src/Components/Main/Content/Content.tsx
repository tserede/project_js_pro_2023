import { CounterComponent } from 'Components/CounterComponent';
import React from 'react';
import style from './Content.module.scss';
import { ProductList } from './ProductList';
import { type ProductListType } from './ProductList/type';
type ProductListPropsType = {
  ProductListData: ProductListType[];
};
export const Content = ({ ProductListData }: ProductListPropsType) => {
  return (
    <main className={style.content}>
      <h2>Дарите близким только лучшее</h2>
      <p>У нас Вы можете купить красивый букет из свежих цветов с доставкой по городу</p>
      <div className={style.product_wrapper}>
        {ProductList.map((el) => (
          <CounterComponent key={el.id} image={el.image} title={el.title} price={el.price} />
        ))}
      </div>
    </main>
  );
};
