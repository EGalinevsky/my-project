import React, { useEffect, useState } from 'react'
import send_btn from "../../../../assets/images/img_sidebar/send_btn.svg";

export const AddPosts = (props) =>{

  const [addPost, SetaddPost] = useState('') 

  const addPostClick = ()=>{
    SetaddPost(props.addPostMessage)
    SetaddPost('')
  }

  
  return(
    <div className="addPosts">
        <form className="add-post__form" action="/" >
          <textarea
            className="add-post__text"
            name="post-text"
            value={addPost}
            placeholder="Add post"
            onChange={(e)=> SetaddPost(e.target.value)}
          ></textarea>
          <div className="add-post__form-actions">
            <label className="add-post__file" for="add-post-file">
              <input type="file" id="add-post-file" />
            </label>
            <button onClick={addPostClick} className="add-post-send" type="button">
              <img src={send_btn} alt="send" />
            </button>
          </div>
        </form>
      </div>
  )
}