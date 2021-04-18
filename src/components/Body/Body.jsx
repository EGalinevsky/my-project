import React from "react";
import Rectangle_1 from "../../assets/images/img_sidebar/stories/Rectangle_1.jpg";
import Rectangle_2 from "../../assets/images/img_sidebar/stories/Rectangle_2.jpg";
import Rectangle_3 from "../../assets/images/img_sidebar/stories/Rectangle_3.jpg";
import Rectangle_4 from "../../assets/images/img_sidebar/stories/Rectangle_4.jpg";
import send_btn from "../../assets/images/img_sidebar/send_btn.svg";
import post2 from "../../assets/images/img_sidebar/Rectangle_5.jpg";
import post3 from "../../assets/images/img_sidebar/Rectangle_6.jpg";

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
      {/*stories ====== */}
      <div className="addPosts">
        <form className="add-post__form" action="/" method="post">
          <textarea
            className="add-post__text"
            name="post-text"
            placeholder="Add post"
          ></textarea>
          <div className="add-post__form-actions">
            <label className="add-post__file" for="add-post-file">
              <input type="file" id="add-post-file" />
            </label>
            <button className="add-post-send" type="submit">
              <img src={send_btn} alt="send" />
            </button>
          </div>
        </form>
      </div>
      {/*addPosts ==== */}
      <div className="post">
        <div className="post__content">
          <p className="post__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, porro
            maiores. Est sint cupiditate nihil! Inventore voluptatum illo rem,
            ut quis optio nisi praesentium beatae dicta exercitationem possimus
            doloribus natus.
          </p>
        </div>
        <div className="post__footer">
          <ul className="post__data">
            <li className="post__data-item">
              <time>21.06.2020</time>
            </li>
          </ul>
        </div>
      </div>
      {/*/post/ ====== */}
      <div className="post">
        <div className="post__header">
          <img src={post2} alt="" />
        </div>
        <div className="post__content">
          <h2 className="post__title">
            <a href="#">How written cod quite and self</a>
          </h2>
          <p className="post__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, porro
            maiores. Est sint cupiditate nihil! Inventore voluptatum illo rem,
            ut quis optio nisi praesentium beatae dicta exercitationem possimus
            doloribus natus.
          </p>
        </div>
        <div className="post__footer">
          <ul className="post__data">
            <li className="post__data-item">
              <time>21.06.2020</time>
            </li>
            <li className="post__data-item">
              <a href="#">Make saitov</a>
            </li>
          </ul>
          <a className="post__read" href="#">
            Read
          </a>
        </div>
      </div>
      {/* post with img===== */}
      <div className="post">
        <div className="post__header"></div>
        <div className="post__content">
          <h2 className="post__title">
            <a href="#">Bye new notebook from 150 000 $</a>
          </h2>
        </div>
        <div className="post__footer">
          <ul className="post__data">
            <li className="post__data-item">
              <time>21.06.2020</time>
            </li>
            <li className="post__data-item">
              <a href="#">Продвижение видео</a>
            </li>
          </ul>
          <a className="post__read" href="#">
            Lief comment
          </a>
        </div>
      </div>
      {/* ===== */}
      <div className="post">
        <div className="post__header">
          <img src={post3} alt="" />
        </div>
        <div className="post__content">
          <h2 className="post__title">
            <a href="#">Как я сходил на FrontEnd Conf 2021</a>
          </h2>
          <p className="post__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, porro
            maiores. Est sint cupiditate nihil! Inventore voluptatum illo rem,
            ut quis optio nisi praesentium beatae dicta exercitationem possimus
            doloribus natus.
          </p>
        </div>
        <div className="post__footer">
          <ul className="post__data">
            <li className="post__data-item">
              <time>21.06.2020</time>
            </li>
            <li className="post__data-item">
              <a href="#">Make saitov</a>
            </li>
          </ul>
          <a className="post__read" href="#">
            Read
          </a>
        </div>
      </div>
      {/* ===== */}

      <ul className="pagination">
        <li className="pagination__item">
          <a className="pagination__nav" href="#">
            &lt;
          </a>
        </li>
        <li className="pagination__item">
          <a className="pagination__nav" href="">
            1
          </a>
        </li>
        <li className="pagination__item">
          <a className="pagination__nav active" href="">
            2
          </a>
        </li>
        <li className="pagination__item">
          <a className="pagination__nav" href="">
            3
          </a>
        </li>
        <li className="pagination__item">
          <a className="pagination__nav" href="">
            &gt;
          </a>
        </li>
      </ul>
    </div>
  );
};
