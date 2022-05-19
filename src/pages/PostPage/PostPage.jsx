import { Post, Comment } from "components";
import React from "react";

const PostPage = () => {
  return (
    <>
      <Post />
      <section className="comments-section border-all-thin">
        <div className="comment-input-wrapper">
          <input
            type="text"
            className="comment-input"
            placeholder="Enter your comment..."
          />
          <button className="btn btn-rc btn-solid-primary">Comment</button>
        </div>
        <ul className="comments-list-wrapper">
          <Comment />
          <Comment />
        </ul>
      </section>
    </>
  );
};

export default PostPage;
