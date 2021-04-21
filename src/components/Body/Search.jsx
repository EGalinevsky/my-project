import React from "react";

export const Search = () => {
  return (
    <div className="body">
        <h1 className="page__title">Результаты поиска “Создание сайта”</h1>
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
      <div className="post">
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
    </div>
  );
};
