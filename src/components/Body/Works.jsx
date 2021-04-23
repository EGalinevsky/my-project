import React from "react";
import Works_1 from "./../../assets/images/Works_1.jpg";
import Works_2 from "./../../assets/images/Works_2.jpg";

export const Works = () => {
  return (
    <div className="body">
      <h1 className="page__title">My works</h1>
      <article className="work">
        <div className="work__preview">
          <img src={Works_1} alt="" />
        </div>
        <div className="work__content">
          <h2 className="work__title">
            <a href="#" target="_blank">
              altermono.com
            </a>
          </h2>
          <div className="work__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolorum
            repellat praesentium autem dolore architecto delectus blanditiis
            numquam incidunt eos excepturi labore nesciunt beatae tenetur
            cumque, tempora, impedit possimus molestias?
          </div>
          <ul className="tags">
            <li className="tags_item">дизайн</li>
            <li className="tags_item">создние сайта</li>
            <li className="tags_item">SMM</li>
          </ul>
          <div className="work__footer">
            <a className="btn btn--comments" href="">
              Перейти на сайт
            </a>
          </div>
        </div>
      </article>
      <article className="work">
        <div className="work__preview">
          <img src={Works_2} alt="" />
        </div>
        <div className="work__content">
          <h2 className="work__title">
            <a href="#" target="_blank">
              altermono.com
            </a>
          </h2>
          <div className="work__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolorum
            repellat praesentium autem dolore architecto delectus blanditiis
            numquam incidunt eos excepturi labore nesciunt beatae tenetur
            cumque, tempora, impedit possimus molestias?
          </div>
          <ul className="tags">
            <li className="tags_item">дизайн</li>
            <li className="tags_item">создние сайта</li>
            <li className="tags_item">SMM</li>
          </ul>
          <div className="work__footer">
            <a className="btn btn--comments" href="">
              Перейти на сайт
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};
