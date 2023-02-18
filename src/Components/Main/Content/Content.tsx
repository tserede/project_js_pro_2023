import { CounterComponent } from 'Components/CounterComponent';
import { routes } from 'Constants/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Content.module.scss'

export const Content = () => {
  return (
    <main className={style.content}>
      <h1>MAIN CONTENT</h1>
      <div className={style.product_wrapper}>
      <CounterComponent image={'./IMG_6404_800x800.jpeg'} title={'Гортензия белая'} price={2890} />
      <CounterComponent image={'./diantus-evcalipt.jpeg'} title={'Диантусы в коробке c эвкалиптом'} price={3790} />
      <CounterComponent image={'./krupnie-rozy-prem.jpeg'} title={'Букет крупных роз премиум «Candlelight»'} price={4590}/>
      <CounterComponent image={'./IMG_6404_800x800.jpeg'} title={'Гортензия белая'} price={2890} />
      <CounterComponent image={'./diantus-evcalipt.jpeg'} title={'Диантусы в коробке c эвкалиптом'} price={3790} />
      <CounterComponent image={'./krupnie-rozy-prem.jpeg'} title={'Букет крупных роз премиум «Candlelight»'} price={4590}/>
      <CounterComponent image={'./IMG_6404_800x800.jpeg'} title={'Гортензия белая'} price={2890} />
      <CounterComponent image={'./diantus-evcalipt.jpeg'} title={'Диантусы в коробке c эвкалиптом'} price={3790} />
      <CounterComponent image={'./krupnie-rozy-prem.jpeg'} title={'Букет крупных роз премиум «Candlelight»'} price={4590}/><CounterComponent image={'./IMG_6404_800x800.jpeg'} title={'Гортензия белая'} price={2890} />
      <CounterComponent image={'./diantus-evcalipt.jpeg'} title={'Диантусы в коробке c эвкалиптом'} price={3790} />
      <CounterComponent image={'./krupnie-rozy-prem.jpeg'} title={'Букет крупных роз премиум «Candlelight»'} price={4590}/>
      </div>
      <Link to={routes.delivery} >go to</Link>
    </main>
  );
};
