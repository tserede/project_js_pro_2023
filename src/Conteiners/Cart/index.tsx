import { CartPage } from 'Components/Cart';
import { PageWrapper } from 'Components/Common/PageWrapper';
import React from 'react';
export const Cart = () => {
  return (
    <div className="page_wrapper">
      <PageWrapper>
        <CartPage />
      </PageWrapper>
    </div>
  );
};
