import React from "react";
import send_btn from "../../../assets/images/img_sidebar/send_btn.svg";
import post2 from "../../../assets/images/img_sidebar/Rectangle_5.jpg";
import { NavLink } from "react-router-dom";
import post3 from "../../../assets/images/img_sidebar/Rectangle_6.jpg";
import { Stories } from "./stories/Stories";
import { AddPosts } from "./addPost/AddPosts";

export const Body = () => {
  return (
    <div className="body">
      <Stories />
      {/*stories ====== */}
      <AddPosts />
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
          <NavLink className="post__read" to="/postPage">
            Read
          </NavLink>
        </div>
      </div>
      {/* post with img===== */}
      <div className="post">
        <div className="post__header"></div>
        <div className="post__content">
          <h2 className="post__title">
            <a href="#">Bye new notebook from 150 000 $</a>
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
              <a href="#">Продвижение видео</a>
            </li>
          </ul>
          <NavLink className="post__read" to="/postPage">
            read
          </NavLink>
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
          <NavLink className="post__read" to="/postPage">
            Read
          </NavLink>
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
