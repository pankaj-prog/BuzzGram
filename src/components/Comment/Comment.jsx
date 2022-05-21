import React from "react";

const Comment = ({ ...props }) => {
  const { username, comment, profile_pic } = props;
  return (
    <li className="comment-wrapper">
      <span className="avatar avatar-round">
        <img className="responsive-img" src={profile_pic} alt="...." />
      </span>
      <div>
        <span className="h5">@{username}</span>
        <span className="comment">{comment}</span>
      </div>
    </li>
  );
};

export default Comment;
