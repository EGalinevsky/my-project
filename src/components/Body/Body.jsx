import React from "react";
import Rectangle_1 from '../../assets/images/img_sidebar/stories/Rectangle_1.jpg'
import Rectangle_2 from '../../assets/images/img_sidebar/stories/Rectangle_2.jpg'
import Rectangle_3 from '../../assets/images/img_sidebar/stories/Rectangle_3.jpg'
import Rectangle_4 from '../../assets/images/img_sidebar/stories/Rectangle_4.jpg'

export const Body = () => {
  return (
    <div className="stories">
      <div className="stories__item">
          <img className="stories__preview" src={Rectangle_1} alt=""/>
          <div className="stories__title">Отдыхаю на природе</div>
          <time className="stories__data" datatime='2021-09-21'>21.09.2020</time>
      </div>
      <div className="stories__item">
          <img className="stories__preview" src={Rectangle_2} alt=""/>
          <div className="stories__title">Заканчиваю
сложный проект</div>
          <time className="stories__data" datatime='2021-09-21'>15.09.2020</time>
      </div>
      <div className="stories__item">
          <img className="stories__preview" src={Rectangle_3} alt=""/>
          <div className="stories__title">Переехал в новую квартиру</div>
          <time className="stories__data" datatime='2021-09-21'>11.09.2020</time>
      </div>
      <div className="stories__item">
          <img className="stories__preview" src={Rectangle_4} alt=""/>
          <div className="stories__title">Осень пришла!</div>
          <time className="stories__data" datatime='2021-09-21'>28.08.2020</time>
      </div>
    </div>
  );
};
