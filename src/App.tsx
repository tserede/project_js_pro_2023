import React from 'react';
import './App.css';
import { CounterComponent } from './CounterComponent';

function App() {
  return (
    <div className="App">
      <CounterComponent image={'./flower.jpeg'} title={'Гортензия белая'} price={2890} />
      <CounterComponent
        image={'Здесь будет картинка'}
        title={'Диантусы в коробке c эвкалиптом'}
        price={3790}
      />
      <CounterComponent
        image={'Здесь будет картинка'}
        title={'Букет крупных роз премиум «Candlelight»'}
        price={4590}
      />
    </div>
  );
}

export default App;
