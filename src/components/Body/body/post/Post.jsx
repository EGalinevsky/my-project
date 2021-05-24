import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Post = (props) => {
  const [countLike, setCountLike] = useState(0);

  return (
    <div className="post">
      {props.img ? (
        <div className="post__header">
          <img src={props.img} alt="" />
        </div>
      ) : (
        <> </>
      )}
      <div className="post__content">
        <h2 className="post__title">
          <a href="#">{props.header ? props.header : false}</a>
        </h2>
        <p className="post__text">{props.text}</p>
      </div>
      <div className="post__footer">
        <ul className="post__data">
          <li className="post__data-item">
            <time>21.06.2020</time>
          </li>
          <li className="post__data-item">
            <a href="#">{props.name}</a>
          </li>
          <li className="post__data-item">
            <button onClick={() => setCountLike(prev => prev + 1)}>
              <img className="image__like" src={props.like} alt="" />
            </button>
          </li>
          {countLike}
        </ul>
        <NavLink className="post__read" to="/postPage">
          Read
        </NavLink>
      </div>
    </div>
  );
};
