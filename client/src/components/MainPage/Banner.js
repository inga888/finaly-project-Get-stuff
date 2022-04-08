import React from 'react';
import style from './MainPage.module.css';

export default function Banner() {
  return (
    <div className={style.banner}>
      <p>
        Добро пожаловать в GetХлам!
        <br />
        <p>Хотите почувствовать все эмоции живых торгов, а потом наслаждаться удачной покупкой или выгодной продажей? Вы в правильном месте! Удобный функционал и техническая оснащенность сайта – гарантия проведения безопасной и удачной сделки!
      </p>
    </div>
  );
}
