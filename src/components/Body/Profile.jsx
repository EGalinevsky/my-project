import React from "react";
import avatar from './../../assets/images/avatar.png'

export const Profile = () => {
  return (
    <div className="body">
      <h1 className="page__title">Профиль</h1>

      <form action="/" className="form" method="post">
        <div className="profileCabinet">
          <div className="profileCabinet__form">
            <div className="form__group form__group--md">
              <input
                className="form__control "
                type="text"
                placeholder="Ваше имя"
              />
            </div>
            <div className="form__group form__group--md">
              <input
                className="form__control "
                type="text"
                placeholder="Ваше имя"
              />
            </div>
            <div className="form__group form__group--md">
              <input
                className="form__control "
                type="text"
                placeholder="Ваше имя"
              />
            </div>
            <div className="form__group form__group--md">
              <input
                className="form__control "
                type="text"
                placeholder="Ваше имя"
              />
            </div>
            
          </div>
          <div className="profileCabinet__avatar">
              <img src={avatar} alt=""/>
              <label className="profileCabinet__file">
                  <input type="file"/>
                  выбрать аватар
              </label>
          </div>
          
        </div>
        <button className="btn" type="submit">
              Save
            </button>
      </form>
    </div>
  );
};
