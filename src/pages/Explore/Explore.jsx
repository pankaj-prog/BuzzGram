import { Post } from "components";
import React from "react";

const Explore = () => {
  return (
    <>
      <header className="page-header text-center gutter-bottom-16 h4 fw-sb border-all-thin">
        Explore
      </header>
      <section className="posts-wrapper">
        <Post />
        <Post />
      </section>
    </>
  );
};

export default Explore;
