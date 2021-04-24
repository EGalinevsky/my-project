import React from 'react'

import Rectangle_1 from "../../../../assets/images/img_sidebar/stories/Rectangle_1.jpg";
import Rectangle_2 from "../../../../assets/images/img_sidebar/stories/Rectangle_2.jpg";
import Rectangle_3 from "../../../../assets/images/img_sidebar/stories/Rectangle_3.jpg";
import Rectangle_4 from "../../../../assets/images/img_sidebar/stories/Rectangle_4.jpg";
import { Story } from './Story/Story';

export const Stories = () =>{
  return(
    <div className="stories">

        <Story data='21.09.2020' title='Отдыхаю на природе' img={Rectangle_1}/>
        <Story data='15.09.2020' title='Заканчиваю сложный проект' img={Rectangle_2}/>
        <Story data='02.09.2020' title='Переехал в новую квартиру' img={Rectangle_3}/>
        <Story data='17.09.2020' title='Осень пришла!' img={Rectangle_4}/>

        
      </div>
  )
}