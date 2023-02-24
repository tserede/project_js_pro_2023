import { CartPage } from 'Components/Cart';
import { CheckAuth } from 'Components/Common/CheckAuth';
import React from 'react';
export const Cart = () => {
  return (
    <div className="page_wrapper">
      <CheckAuth>
        <CartPage />
        </CheckAuth>
    </div>
  );
};
