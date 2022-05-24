import { Post, Comment } from "components";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { postComment } from "redux/reducers/postsSlice";

const PostPage = () => {
  const { postID } = useParams();
  const { posts } = useSelector((state) => state.posts);
  const [currentPost, setCurrentPost] = useState(null);
  const commentRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const foundPost = posts?.find((post) => post._id === postID);
    setCurrentPost(foundPost);
  }, [posts]);

  const commentHandler = () => {
    if (commentRef.current.value.trim() == "") {
      toast.error("comment should not be empty");
    } else {
      dispatch(
        postComment({ postId: postID, comment: commentRef.current.value })
      );
      commentRef.current.value = "";
    }
  };

  return currentPost ? (
    <>
      <Post {...currentPost} />
      <section className="comments-section border-all-thin">
        <div className="comment-input-wrapper">
          <input
            type="text"
            ref={commentRef}
            className="comment-input"
            placeholder="Enter your comment..."
          />
          <button
            className="btn btn-rc btn-solid-primary"
            onClick={commentHandler}
          >
            Comment
          </button>
        </div>
        <ul className="comments-list-wrapper">
          {currentPost.comments.length > 0 &&
            currentPost.comments.map((comment) => (
              <Comment key={comment._id} {...comment} />
            ))}
        </ul>
      </section>
    </>
  ) : (
    <p className="text-center">loading....</p>
  );
};

export default PostPage;
