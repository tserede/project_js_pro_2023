import { CounterComponent } from 'Components/CounterComponent';
import { routes } from 'Constants/routes';
import React from 'react';
import { Link } from 'react-router-dom';
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
        {/* <CounterComponent image={'./IMG_6404_800x800.jpeg'} title={'Гортензия белая'} price={2890} />
      <CounterComponent image={'./diantus-evcalipt.jpeg'} title={'Диантусы в коробке c эвкалиптом'} price={3790} />
      <CounterComponent image={'./krupnie-rozy-prem.jpeg'} title={'Букет крупных роз премиум «Candlelight»'} price={4590}/>
      <CounterComponent image={'./IMG_6404_800x800.jpeg'} title={'Гортензия белая'} price={2890} />
      <CounterComponent image={'./diantus-evcalipt.jpeg'} title={'Диантусы в коробке c эвкалиптом'} price={3790} />
      <CounterComponent image={'./krupnie-rozy-prem.jpeg'} title={'Букет крупных роз премиум «Candlelight»'} price={4590}/>
      <CounterComponent image={'./IMG_6404_800x800.jpeg'} title={'Гортензия белая'} price={2890} />
      <CounterComponent image={'./diantus-evcalipt.jpeg'} title={'Диантусы в коробке c эвкалиптом'} price={3790} />
      <CounterComponent image={'./krupnie-rozy-prem.jpeg'} title={'Букет крупных роз премиум «Candlelight»'} price={4590}/><CounterComponent image={'./IMG_6404_800x800.jpeg'} title={'Гортензия белая'} price={2890} />
      <CounterComponent image={'./diantus-evcalipt.jpeg'} title={'Диантусы в коробке c эвкалиптом'} price={3790} />
      <CounterComponent image={'./krupnie-rozy-prem.jpeg'} title={'Букет крупных роз премиум «Candlelight»'} price={4590}/> */}
      </div>
      <Link to={routes.delivery}>go to</Link>
    </main>
  );
};
