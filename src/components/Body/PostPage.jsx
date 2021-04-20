import React from "react";
import post2 from "../../assets/images/img_sidebar/Rectangle_5.jpg";
import share_1 from "../../assets/images/share_1.svg";
import post_img from "../../assets/images/image.jpg";

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
              className='form__control form__control--textarea'
                name="comment-text"
                placeholder="Текст комментария"
              ></textarea>
              <button className="btn btn--blue btn--comments" type="submit">
                Отправить
              </button>
            </form>          
        </div>
        {/* ======= */}
      </div>
    </div>
  );
};
