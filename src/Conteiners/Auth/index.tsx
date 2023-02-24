import { AuthForm } from 'Components/Auth';
import { routes } from 'Constants/routes';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserSelectors, UserSliceActions } from 'Store';
export const Auth = () => {
  const loading = useSelector(UserSelectors.getUserLoading);
  const token = useSelector(UserSelectors.getUserToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (token && token !== 'error') {
      navigate(routes.main);
      dispatch(UserSliceActions.setUserLoading(false));
    }
    if (token === 'error') {
      dispatch(UserSliceActions.setUserLoading(false));
    }
  }, [token]);
  return (
    <div className="page_wrapper">
      {loading ? <h1>Loading...</h1> : <AuthForm />}
    </div>
  );
};
