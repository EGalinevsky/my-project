import React from "react";

export const Pagination = () =>{
  return(
    <ul className="pagination">
        <li className="pagination__item">
          <a className="pagination__nav" href="#">
            &lt;
          </a>
        </li>
        <li className="pagination__item">
          <a className="pagination__nav active" href="">
            1
          </a>
        </li>
        <li className="pagination__item">
          <a className="pagination__nav" href="">
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
  )
}