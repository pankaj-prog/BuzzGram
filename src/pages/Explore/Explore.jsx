import { Post } from "components";
import React from "react";
import { useSelector } from "react-redux";

const Explore = () => {
  const { posts, fetchingPosts } = useSelector((state) => state.posts);

  return (
    <>
      <header className="page-header text-center gutter-bottom-16 h4 fw-sb border-all-thin">
        Explore
      </header>
      <section className="posts-wrapper">
        {fetchingPosts == "fulfilled" &&
          (posts.length > 0 ? (
            posts.map((post) => <Post {...post} />)
          ) : (
            <p className="text-center">No posts to show</p>
          ))}
      </section>
    </>
  );
};

export default Explore;
