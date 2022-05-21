import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiOutlineComment, FiBookmark } from "assets/icons";
import { IconButton } from "components";

const Post = ({ ...params }) => {
  const { image, caption, name, username, profile_pic, likes, comments, id } =
    params;

  const navigate = useNavigate();
  const currLocation = useLocation();

  return (
    <article className="post gutter-bottom-16">
      <header className="post-header gutter-bottom-16">
        <div className="post-user-details">
          <span
            className="avatar avatar-round"
            onClick={() => navigate(`/profile/${username}`)}
          >
            <img className="responsive-img" src={profile_pic} alt="...." />
          </span>
          <div onClick={() => navigate(`/profile/${username}`)}>
            <h5 className="user-name">{name}</h5>
            <span className="text-muted text-sm">@{username}</span>
          </div>
        </div>
        <button className="btn">follow +</button>
      </header>
      <section className="img-wrapper ">
        <img
          onClick={() => navigate(`/post/${id}`)}
          cursor="pointer"
          className="post-img"
          src={image}
          alt=""
        />
      </section>
      <section className="post-status-bar">
        <span>{likes?.likeCount} Likes</span>
        <div className="post-actions-wrapper">
          <IconButton icon={<AiOutlineHeart />} />
          <IconButton
            icon={<AiOutlineComment />}
            clickHandler={() => navigate(`/post/${id}`)}
          />
          <IconButton icon={<FiBookmark />} />
        </div>
      </section>
      <section className="post-content">
        <h5 onClick={() => navigate(`/profile/${username}`)}>{name}</h5>
        <p className="gutter-bottom-8 caption">{caption}</p>
        {!(currLocation.pathname == "/post/:postID") && (
          <button
            onClick={() => navigate(`/post/${id}`)}
            className="text-muted btn fw-r"
          >
            View all {comments.length} comments
          </button>
        )}
      </section>
    </article>
  );
};

export default Post;
