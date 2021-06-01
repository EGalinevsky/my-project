import React from 'react'
import send_btn from "../../../../assets/images/img_sidebar/send_btn.svg";

export const AddPosts = (props) =>{
  
  console.log('fef')
  const addPostClick = ()=>{  
    props.addPostfromContainer()
  }

  const HandlerChangePost = (e) =>{
    let text = e.target.value
    props.updateNewPostFromContainer(text)
  }


  
  return(
    <div className="addPosts">
        <form className="add-post__form" action="/" >
          <textarea
            className="add-post__text"
            name="post-text"
            value={props.newMessages}
            placeholder="Add post"
            onChange={HandlerChangePost}
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