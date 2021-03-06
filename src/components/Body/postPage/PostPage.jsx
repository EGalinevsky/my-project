import React from "react";
import share_1 from "../../../assets/images/share_1.svg";
import post_img from "../../../assets/images/image.jpg";
import Ellipse_2 from "../../../assets/images/Ellipse_2.png";

export const PostPage = () => {
  return (
    <div className="body">
      <div className="post">
        <div className="post__actions">
          <a className="post__actions__links" href="">
            вернуться назад
          </a>
          <a className="post__actions__links" href="">
            поделится
            <img className="post__actions--icon" src={share_1} alt="" />
          </a>
        </div>
        <div className="post__header">
          <h2 className="post__title">How written cod quite and self</h2>
          <ul className="post__data">
            <li className="post__data-item">
              <time>21.06.2020</time>
            </li>
            <li className="post__data-item">
              <a href="#">Make saitov</a>
            </li>
          </ul>
        </div>
        <div className="post__content">
          <div className="post__text">
            <h2>title h2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia
              sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.
              Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed
              volutpat massa. Egestas ornare vel volutpat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Elementum volutpat orci turpis
              urna. Et vestibulum, posuere tortor lacinia sit. Sagittis
              porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu
              sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat
              massa. Egestas ornare vel volutpat.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
              porro maiores. Est sint cupiditate nihil! Inventore voluptatum
              illo rem, ut quis optio nisi praesentium beatae dicta
              exercitationem possimus doloribus natus.
            </p>
            <img src={post_img} alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
              porro maiores. Est sint cupiditate nihil! Inventore voluptatum
              illo rem, ut quis optio nisi praesentium beatae dicta
              exercitationem possimus doloribus natus.
            </p>
          </div>
        </div>
        {/* ===== */}
        <div className="related">
          <h3 className="related__title">Интересно почитать</h3>
          <ul className="related__list">
            <li className="related__list-item">
              <h4 className="related__list-title">
                <a href="#">
                  Как я сходил на FrontEnd Conf 2021 Как я сходил на FrontEnd
                  Conf 2021
                </a>
              </h4>
              <time className="related__list-date">23.04.2021</time>
            </li>
            <li className="related__list-item">
              <h4 className="related__list-title">
                <a href="#">Как я сходил на FrontEnd Conf 2021</a>
              </h4>
              <time className="related__list-date">23.04.2021</time>
            </li>
            <li className="related__list-item">
              <h4 className="related__list-title">
                <a href="#">Как я сходил на FrontEnd Conf 2021</a>
              </h4>
              <time className="related__list-date">23.04.2021</time>
            </li>
            <li className="related__list-item">
              <h4 className="related__list-title">
                <a href="#">Как я сходил на FrontEnd Conf 2021</a>
              </h4>
              <time className="related__list-date">23.04.2021</time>
            </li>
          </ul>
        </div>
        {/* ======= */}
        <div className="add_comments">
          <h3 className="add_comments__title">Обсуждения</h3>
          <form className="form__group" action="" method="post">
            <textarea
              className="form__control form__control--textarea"
              name="comment-text"
              placeholder="Текст комментария"
            ></textarea>
            <button className="btn btn--blue btn--comments" type="submit">
              Отправить
            </button>
          </form>
        </div>
        {/* ======= */}
        <ul className="comments">
          <li className="comments__items">
            <div className="comments__header">
              <img className="comments__avatar" src={Ellipse_2} alt="" />
              <div className="comments__author">
                <div className="comments_name">Дмитрий Валак</div>
                <time className="comments_pubdate">1 неделю назад</time>
              </div>
            </div>
            <div className="comments__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
              magni ut, repudiandae eaque exercitationem eligendi? Dolorum
              molestias repellendus, voluptas recusandae officiis ad eligendi
              molestiae dicta libero, ipsum quaerat vero doloribus.
            </div>
            <button className="comments__reply" type="button">
              Answer
            </button>
            <ul className="comments">
              <li className="comments__items">
                <div className="comments__header">
                  <img className="comments__avatar" src={Ellipse_2} alt="" />
                  <div className="comments__author">
                    <div className="comments_name">Дмитрий Валак</div>
                    <time className="comments_pubdate">1 неделю назад</time>
                  </div>
                </div>
                <div className="comments__text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellat magni ut, repudiandae eaque exercitationem eligendi?
                  Dolorum molestias repellendus, voluptas recusandae officiis ad
                  eligendi molestiae dicta libero, ipsum quaerat vero doloribus.
                </div>
                <button className="comments__reply" type="button">
                  Answer
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
