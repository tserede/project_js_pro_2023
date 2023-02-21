import { PageWrapper } from 'Components/Common/PageWrapper';
import { ContactsInfo } from 'Components/Contacts';
import React from 'react';
export const Contacts = () => {
  return (
    <div className="page_wrapper">
      <PageWrapper>
        <ContactsInfo />
      </PageWrapper>
    </div>
  );
};
