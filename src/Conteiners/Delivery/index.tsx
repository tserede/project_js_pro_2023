import { Footer } from 'Components/Common/Footer';
import { Header } from 'Components/Common/Header';
import { DeliveryPayment } from 'Components/DeliveryPayment';
import React from 'react';
export const Delivery = () => {
  return (
    <div className="page_wrapper">
      <Header />
      <DeliveryPayment />
      <Footer />
    </div>
  );
};
