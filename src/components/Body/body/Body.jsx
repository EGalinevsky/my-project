import React, { useState } from "react";
import post2 from "../../../assets/images/img_sidebar/Rectangle_5.jpg";
import post3 from "../../../assets/images/img_sidebar/Rectangle_6.jpg";
import { Stories } from "./stories/Stories";
import { AddPosts } from "./addPost/AddPosts";
import { Post } from "./post/Post";
import like from "../../../assets/images/like.png"
import { Pagination } from "./pagination/Pagination";

export const Body = (props) => {
  debugger

  const blocksData= props.state.mainPage
  console.log(blocksData)


//   let addPost = (postMessage) =>{
//   debugger
//     let newPost ={
//       header: "New Post",
//       text:postMessage,
//       name: "carl",
//       like: like,
//       id: 5,
//       countLike: 0
//     }
//     setBlocksData(blocksData.concat(newPost))   
// }


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
      <AddPosts dispatch={props.dispatch} state={props.state} />
      {/*addPosts ==== */}
      {PostsElement}
      <Pagination />
    </div>
  );
};


