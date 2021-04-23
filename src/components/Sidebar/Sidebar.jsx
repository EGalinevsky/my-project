import React from "react";
import sidebarHeader from "./../../assets/images/img_sidebar/sidebarHeader.jpg";
import user from "./../../assets/images/img_sidebar/user.jpg";
import instagram from "./../../assets/images/img_sidebar/instagram_1.svg";
import vk from "./../../assets/images/img_sidebar/vk_1.svg";
import pinterest from "./../../assets/images/img_sidebar/pinterest_1.svg";
import { NavLink } from "react-router-dom";
import edit from "./../../assets/images/edit.png";

export const Sidebar = () => {
  return (
    <div>
      <div className="sidebar_header">
        <img src={sidebarHeader} alt="" />
      </div>
      <div className="sidebar_content">
        <div className="profile">
          <img className="avatar" src={user} alt="" />
          <div className="wrapper__profile">
            <div className="profile_name">Eugene Galinevsky</div>
            <NavLink to="/profile">
              <img className="profile__edit" src={edit} alt="" />
            </NavLink>
          </div>

          <div className="profile_prof">React-developer</div>
          <ul className="social">
            <li className="social_item">
              <a className="social_link" href="#" target="_black">
                <img src={instagram} alt="" />
              </a>
            </li>
            <li className="social_item">
              <a className="social_link" href="#" target="_black">
                <img src={vk} alt="" />
              </a>
            </li>
            <li className="social_item">
              <a className="social_link" href="#" target="_black">
                <img src={pinterest} alt="" />
              </a>
            </li>
          </ul>
          <div className="profile_text">
            Front-end разработчик. Практик верстки сайтов. Созданием сайтов
            занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и наработал
            более 10 000 часов в создании сайтов различной сложности.
          </div>
        </div>
      </div>
      <div className="sidebar_footer">
        <NavLink className="btn btn--red" to="/works">
          My works
        </NavLink>
        <NavLink to="/#">
          <button className="btn btn--blue" type="button">
            Write me
          </button>
        </NavLink>
      </div>
    </div>
  );
};
