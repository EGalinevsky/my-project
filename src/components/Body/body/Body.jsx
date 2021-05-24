import React, { useState } from "react";
import post2 from "../../../assets/images/img_sidebar/Rectangle_5.jpg";
import post3 from "../../../assets/images/img_sidebar/Rectangle_6.jpg";
import { Stories } from "./stories/Stories";
import { AddPostsContainer } from "./addPost/AddPostsContainer";
import { Post } from "./post/Post";
import like from "../../../assets/images/like.png"
import { Pagination } from "./pagination/Pagination";

export const Body = (props) => {
  
  const blocksData= props.state.mainPage
  console.log(blocksData)


  const PostsElement = blocksData.map((post) => (
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
    <div className="body">
      <Stories />
      {/*stories ====== */}
      <AddPostsContainer store={props.store} />
      {/*addPosts ==== */}
      {PostsElement}
      <Pagination />
    </div>
  );
};


