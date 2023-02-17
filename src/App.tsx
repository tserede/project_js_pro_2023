import { routes } from 'Constants/routes';
import { Delivery } from 'Conteiners/Delivery';
import { Main } from 'Conteiners/Main';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path={routes.main} element={<Main />} />
      <Route path={routes.delivery} element={<Delivery />} />
    </Routes>
  )
}
export default App;
