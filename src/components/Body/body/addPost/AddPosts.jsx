import React from 'react'
import send_btn from "../../../../assets/images/img_sidebar/send_btn.svg";

export const AddPosts = () =>{
  return(
    <div className="addPosts">
        <form className="add-post__form" action="/" method="post">
          <textarea
            className="add-post__text"
            name="post-text"
            placeholder="Add post"
          ></textarea>
          <div className="add-post__form-actions">
            <label className="add-post__file" for="add-post-file">
              <input type="file" id="add-post-file" />
            </label>
            <button className="add-post-send" type="submit">
              <img src={send_btn} alt="send" />
            </button>
          </div>
        </form>
      </div>
  )
}