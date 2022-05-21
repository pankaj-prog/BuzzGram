import React, { useEffect } from "react";
import { Post } from "components";
import { useSelector } from "react-redux";

const Home = () => {
  const { posts, fetchingPosts } = useSelector((state) => state.posts);

  return (
    <>
      <section className="posts-filters-wrapper gutter-bottom-16">
        <button className="btn btn-rc filter-btn filter-btn-selected">
          Latest
        </button>
        <button className="btn btn-rc filter-btn">Trending</button>
        <button className="btn btn-rc filter-btn">Oldest First</button>
      </section>
      <div className="posts-wrapper">
        {fetchingPosts == "fulfilled" &&
          (posts?.length > 0 ? (
            posts.map((post) => <Post {...post} />)
          ) : (
            <p className="text-center">No posts to show</p>
          ))}
      </div>
    </>
  );
};

export default Home;
