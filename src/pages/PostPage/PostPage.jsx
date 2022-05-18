import { Post } from "components";
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                quas assumenda dolores, autem doloribus iusto!
              </span>
            </div>
          </li>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                quas assumenda dolores, autem doloribus iusto!
              </span>
            </div>
          </li>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                quas assumenda dolores, autem doloribus iusto!
              </span>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default PostPage;
