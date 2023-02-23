import { Input } from 'Components/Common/Input';
import React, { type ChangeEvent, useState, useEffect } from 'react';
import style from './AuthForm.module.scss';

export const AuthForm = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const changeHandler =
    (fieldName: 'email' | 'password') => (event: ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => {
        const newData = { ...prev };
        newData[fieldName] = event.target.value;
        return newData;
      });
    };

  const submitHandler = () => {
    if (formState.password.length < 5) {
      setErrorMessage('Пароль слишком короткий');
    } else {
      setErrorMessage('');
      console.log(formState, 'отправлено на сервер');
    }
  };

  useEffect(() => {
    if (formState.password.length < 5 && formState.password !== '') {
      setErrorMessage('Пароль слишком короткий');
    } else {
      setErrorMessage('');
    }
  }, [formState.password]);
  return (
    <div className={style.wrapper}>
      <h1>Авторизация</h1>
      <div className={style.input_group}>
        <Input name={'Email'} value={formState.email} changeHandler={changeHandler('email')} />
        <Input
          name={'Пароль'}
          value={formState.password}
          changeHandler={changeHandler('password')}
          type="password"
        />
      </div>
      {errorMessage !== '' && <div className={style.error}>{errorMessage}</div>}
        <label className={style.input_check}><input type="checkbox" />Запомнить меня</label>
      <button type="button" onClick={submitHandler}>
        Войти
      </button>
    </div>
  );
};
