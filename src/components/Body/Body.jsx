import React from "react";
import Rectangle_1 from "../../assets/images/img_sidebar/stories/Rectangle_1.jpg";
import Rectangle_2 from "../../assets/images/img_sidebar/stories/Rectangle_2.jpg";
import Rectangle_3 from "../../assets/images/img_sidebar/stories/Rectangle_3.jpg";
import Rectangle_4 from "../../assets/images/img_sidebar/stories/Rectangle_4.jpg";
import send_btn from "../../assets/images/img_sidebar/send_btn.svg";

export const Body = () => {
  return (
    <div className="body">
      <div className="stories">
        <div className="stories__item">
          <img className="stories__preview" src={Rectangle_1} alt="" />
          <div className="stories__title">Отдыхаю на природе</div>
          <time className="stories__data" datatime="2021-09-21">
            21.09.2020
          </time>
        </div>
        <div className="stories__item">
          <img className="stories__preview" src={Rectangle_2} alt="" />
          <div className="stories__title">Заканчиваю сложный проект</div>
          <time className="stories__data" datatime="2021-09-21">
            15.09.2020
          </time>
        </div>
        <div className="stories__item">
          <img className="stories__preview" src={Rectangle_3} alt="" />
          <div className="stories__title">Переехал в новую квартиру</div>
          <time className="stories__data" datatime="2021-09-21">
            11.09.2020
          </time>
        </div>
        <div className="stories__item">
          <img className="stories__preview" src={Rectangle_4} alt="" />
          <div className="stories__title">Осень пришла!</div>
          <time className="stories__data" datatime="2021-09-21">
            28.08.2020
          </time>
        </div>
      </div>
      <div className="addPosts">
        <form className="add-post__form" action="/" method="post">
          <textarea className='add-post__text' name="post-text" placeholder="Add post"></textarea>
          <div className="add-post__form-actions">
            <label className='add-post__file' for='add-post-file'>
              <input type="file" id="add-post-file" />
            </label>
            <button className='add-post-send' type="submit">
              <img src={send_btn} alt="send"/>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
