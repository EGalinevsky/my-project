import React from "react";
import send_btn from "../../../../assets/images/img_sidebar/send_btn.svg";
import { Post } from "../post/Post";

export const AddPosts = (props) => {
  debugger;
  console.log("fef");
  const addPostClick = () => {
    props.addPostfromContainer();
  };

  const HandlerChangePost = (e) => {
    let text = e.target.value;
    props.updateNewPostFromContainer(text);
  };

  const storePostsArray = props.mainPage;

  const PostsElement = storePostsArray.map((post) => (
    <Post
      header={post.header}
      text={post.text}
      name={post.name}
      id={post.id}
      img={post.img}
      key={post.id}
      like={post.like}
      countLike={post.countLike}
    />
  ));

  return (
    <div>
      <div className="addPosts">
        <form className="add-post__form" action="/">
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
            <button
              onClick={addPostClick}
              className="add-post-send"
              type="button"
            >
              <img src={send_btn} alt="send" />
            </button>
          </div>
        </form>
      </div>
      {PostsElement}
    </div>
  );
};
