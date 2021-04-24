import React from "react";
import send_btn from "../../../assets/images/img_sidebar/send_btn.svg";
import post2 from "../../../assets/images/img_sidebar/Rectangle_5.jpg";
import { NavLink } from "react-router-dom";
import post3 from "../../../assets/images/img_sidebar/Rectangle_6.jpg";
import { Stories } from "./stories/Stories";
import { AddPosts } from "./addPost/AddPosts";
import { Post } from "./post/Post";
import { Pagination } from "./pagination/Pagination";

export const Body = () => {

  const postText ={
    text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, porromaiores. Est sint cupiditate nihil! Inventore voluptatum illo rem,ut quis opti o nisi praesentium beatae dicta exercitationem possimus     doloribus natus.',
    header: 'How written cod quite and self',
    header2: 'Bye new notebook from 150 000 $',
    header3: 'Как я сходил на FrontEnd Conf 2021'
  }


  return (
    <div className="body">
      <Stories />
      {/*stories ====== */}
      <AddPosts />
      {/*addPosts ==== */}
      <Post  text={postText.text}/>
      {/*/post/ ====== */}
      <Post img={post2} header={postText.header} text={postText.text}/>
      {/* post with img===== */}
      <Post  text={postText.text} header={postText.header2}/>
      {/*/post/ ====== */}
      <Post img={post3} header={postText.header3} text={postText.text}/>      
      {/* post with img===== */}
      <Pagination />
    </div>
  );
};
