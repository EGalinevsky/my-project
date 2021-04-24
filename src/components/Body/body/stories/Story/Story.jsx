import React from "react";
 
export const Story = (props) =>{
  return(
    <div className="stories__item">
          <img className="stories__preview" src={props.img} alt="" />
          <div className="stories__title">{props.title}</div>
          <time className="stories__data" datatime="2021-09-21">
            {props.data}
          </time>
        </div>
  )
}