import React from "react";
import { Post } from "components";

const Home = () => {
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
        <Post />
        <Post />
      </div>
    </>
  );
};

export default Home;
