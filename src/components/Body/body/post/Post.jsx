import React from 'react'
import { NavLink } from "react-router-dom";

export const Post = () =>{
    return(
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
          <NavLink className="post__read" to="/postPage">
            Read
          </NavLink>
        </div>
      </div>
    )
}