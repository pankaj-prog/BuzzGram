import { Post, Comment } from "components";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const { postID } = useParams();
  const { posts } = useSelector((state) => state.posts);
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    const foundPost = posts?.find((post) => post.id === postID);
    setCurrentPost(foundPost);
  }, [posts]);

  return currentPost ? (
    <>
      <Post {...currentPost} />
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
          {currentPost.comments.length > 0 &&
            currentPost.comments.map((comment) => <Comment {...comment} />)}
        </ul>
      </section>
    </>
  ) : (
    <p className="text-center">loading....</p>
  );
};

export default PostPage;
