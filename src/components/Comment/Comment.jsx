import React from "react";

const Comment = () => {
  return (
    <li className="comment-wrapper">
      <span className="avatar avatar-round">
        <img
          className="responsive-img"
          src="https://adaptiveui.netlify.app/src/assets/avatar-default.png"
          alt="...."
        />
      </span>
      <div>
        <span className="h5">@pankajw01</span>
        <span className="comment">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quas
          assumenda dolores, autem doloribus iusto!
        </span>
      </div>
    </li>
  );
};

export default Comment;
