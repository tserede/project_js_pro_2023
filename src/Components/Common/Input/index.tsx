import React, { ChangeEvent } from 'react';
import style from './input.module.scss';

type InputProps = {
  name: string;
  value: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};
export const Input = ({ changeHandler, value, name, type = 'text' }: InputProps) => {
  return (
    <div className={style.wrapper}>
      <span>{name}</span>
      <input value={value} onChange={changeHandler} type={type} />
    </div>
  );
};
