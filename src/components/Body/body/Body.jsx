import React from "react";
import post2 from "../../../assets/images/img_sidebar/Rectangle_5.jpg";
import post3 from "../../../assets/images/img_sidebar/Rectangle_6.jpg";
import { Stories } from "./stories/Stories";
import { AddPosts } from "./addPost/AddPosts";
import { Post } from "./post/Post";
import { Pagination } from "./pagination/Pagination";

export const Body = () => {
  const blocksData = [
    {
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, porromaiores. Est sint cupiditate nihil! Inventore voluptatum illo rem,ut quis opti o nisi praesentium beatae dicta exercitationem possimus     doloribus natus.",
      name: "eugene",
      id: 1,
    },
    {
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, porromaiores. Est sint cupiditate nihil! Inventore voluptatum illo rem,ut quis opti o nisi praesentium beatae dicta exercitationem possimus     doloribus natus.",
      header: "How written cod quite and self",
      name: "sasha",
      id: 2,
      img: post2
    },
    {
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, porromaiores. Est sint cupiditate nihil! Inventore voluptatum illo rem,ut quis opti o nisi praesentium beatae dicta exercitationem possimus     doloribus natus.",
      header: "Bye new notebook from 150 000 $",
      name: "igor",
      id: 3,
    },
    {
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, porromaiores. Est sint cupiditate nihil! Inventore voluptatum illo rem,ut quis opti o nisi praesentium beatae dicta exercitationem possimus     doloribus natus.",
      header: "Как я сходил на FrontEnd Conf 2021",
      name: "lexa",
      id: 4,
      img: post3
    },
  ];

  const PostsElement = blocksData.map((post) => (
    <Post
      header={post.header}
      text={post.text}
      name={post.name}
      id={post.id}
      img={post.img}
      key={post.id}
    />
  ));
  return (
    <div className="body">
      <Stories />
      {/*stories ====== */}
      <AddPosts />
      {/*addPosts ==== */}
      {PostsElement}
      <Pagination />
    </div>
  );
};
