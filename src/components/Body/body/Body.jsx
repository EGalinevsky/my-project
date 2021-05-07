import React, { useState } from "react";
import post2 from "../../../assets/images/img_sidebar/Rectangle_5.jpg";
import post3 from "../../../assets/images/img_sidebar/Rectangle_6.jpg";
import { Stories } from "./stories/Stories";
import { AddPosts } from "./addPost/AddPosts";
import { Post } from "./post/Post";
import like from "../../../assets/images/like.png"
import { Pagination } from "./pagination/Pagination";

export const Body = () => {

  let [blocksData, setAddPost] = useState([
    {
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, porromaiores. Est sint cupiditate nihil! Inventore voluptatum illo rem,ut quis opti o nisi praesentium beatae dicta exercitationem possimus     doloribus natus.",
      name: "eugene",
      id: 1,
      like: like,
      countLike: 0
    },
    {
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, porromaiores. Est sint cupiditate nihil! Inventore voluptatum illo rem,ut quis opti o nisi praesentium beatae dicta exercitationem possimus     doloribus natus.",
      header: "How written cod quite and self",
      name: "sasha",
      id: 2,
      img: post2,
      like: like,
      countLike: 0
    },
    {
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, porromaiores. Est sint cupiditate nihil! Inventore voluptatum illo rem,ut quis opti o nisi praesentium beatae dicta exercitationem possimus     doloribus natus.",
      header: "Bye new notebook from 150 000 $",
      name: "igor",
      id: 3,
      like: like,
      countLike: 0
    },
    {
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, porromaiores. Est sint cupiditate nihil! Inventore voluptatum illo rem,ut quis opti o nisi praesentium beatae dicta exercitationem possimus     doloribus natus.",
      header: "Как я сходил на FrontEnd Conf 2021",
      name: "lexa",
      id: 4,
      img: post3,
      like: like,
      countLike: 0
    },
  ])

  // const blocksData = ;



  let addPost = (postMessage) =>{
  debugger
    let newPost ={
      header: "New Post",
      text:postMessage,
      name: "carl",
      like: like,
      id: 5,
      countLike: 0
    }
    setAddPost(blocksData.concat(newPost))   
}


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
      <AddPosts  addPostMessage={addPost} blocksData={blocksData}/>
      {/*addPosts ==== */}
      {PostsElement}
      <Pagination />
    </div>
  );
};


