import { AuthForm } from 'Components/Auth';
import { PageWrapper } from 'Components/Common/PageWrapper';
import React from 'react';
export const Auth = () => {
  return (
    <div className="page_wrapper">
      <PageWrapper>
        <AuthForm />
      </PageWrapper>
    </div>
  );
};
