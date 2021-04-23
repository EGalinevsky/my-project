import React from "react";

export const Singup = () => {
  return (
    <div className="body">
      <h1 className="page__title page__title--center">Регистрация</h1>
      <form className="form form--auth" action="/" method="post">
        <div className="form__group form__group--md">
          <input
            className="form__control "
            type="text"
            placeholder="Ваше email"
          />
        </div>
        <div className="form__group form__group--md">
          <input
            className="form__control "
            type="text"
            placeholder="Пароль"
          />
        </div>
        <button className="btn" type="submit">
              Ввод
            </button>
      </form>
    </div>
  );
};
