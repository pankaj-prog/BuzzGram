import React from "react";
import { AiOutlineHeart, AiOutlineComment, FiBookmark } from "assets/icons";
import { IconButton } from "components";

const Post = () => {
  return (
    <article className="post gutter-bottom-16">
      <header className="post-header gutter-bottom-16">
        <div className="post-user-details">
          <span className="avatar avatar-round">
            <img
              className="responsive-img"
              src="https://adaptiveui.netlify.app/src/assets/avatar-default.png"
              alt="...."
            />
          </span>
          <h5 className="user-name">Pankaj Wadhwani</h5>
        </div>
        <button className="btn">follow +</button>
      </header>
      <section className="img-wrapper ">
        <img
          className="post-img"
          src="https://images.unsplash.com/photo-1652767935209-e0bf66690fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </section>
      <section className="post-status-bar">
        <span>3 Likes</span>
        <div className="post-actions-wrapper">
          <IconButton icon={<AiOutlineHeart />} />
          <IconButton icon={<AiOutlineComment />} />
          <IconButton icon={<FiBookmark />} />
        </div>
      </section>
      <section className="post-content">
        <h5>Pankaj Wadhwani</h5>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure quae,
          perferendis sapiente porro dolore obcaecati accusamus deleniti ab illo
          rem.
        </p>
      </section>
    </article>
  );
};

export default Post;
