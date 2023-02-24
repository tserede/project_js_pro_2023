import { AuthForm } from 'Components/Auth';
import { PageWrapper } from 'Components/Common/PageWrapper';
import React from 'react';
import { useSelector } from 'react-redux';
import { UserSelectors } from 'Store';
export const Auth = () => {
  const loading = useSelector(UserSelectors.getUserLoading);
  return (
    <div className="page_wrapper">
      <PageWrapper>{loading ? <h1>Loading...</h1> : <AuthForm />}</PageWrapper>
    </div>
  );
};
