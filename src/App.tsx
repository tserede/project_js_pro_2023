import { PageWrapper } from 'Components/Common/PageWrapper';
import { routes } from 'Constants/routes';
import { Auth } from 'Conteiners/Auth';
import { Cart } from 'Conteiners/Cart';
import { Contacts } from 'Conteiners/Contacts';
import { Corporate } from 'Conteiners/Corporate';
import { Delivery } from 'Conteiners/Delivery';
import { Main } from 'Conteiners/Main';
import { Reg } from 'Conteiners/Reg';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
    <Route path={routes.main} element={<PageWrapper />}>
      <Route index element={<Main />} />
      <Route path={routes.delivery} element={<Delivery />} />
      <Route path={routes.contacts} element={<Contacts />} />
      <Route path={routes.corporateclients} element={<Corporate/>} />
      <Route path={routes.auth} element={<Auth/>} />
      <Route path={routes.reg} element={<Reg/>} />
      <Route path={routes.cart} element={<Cart/>} />
     </Route>
    </Routes>
  );
}
export default App;
