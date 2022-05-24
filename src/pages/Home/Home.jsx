import React, { useEffect, useState } from "react";
import { Post } from "components";
import { useSelector } from "react-redux";

const Home = () => {
  const { posts, fetchingPosts } = useSelector((state) => state.posts);
  const [sortBy, setSortBy] = useState("latest");
  const { user } = useSelector((state) => state.auth);
  const { users, fetchingUsers } = useSelector((state) => state.users);

  const latestFirst = (a, b) => new Date(b.createdAt) - new Date(a.createdAt);
  const oldestFirst = (a, b) => new Date(a.createdAt) - new Date(b.createdAt);

  const trendingFirst = (a, b) => {
    // sort by for comments first
    if (a.comments.length == b.comments.length) {
      // sort by  likes
      if (a.likes.likeCount == b.likes.likeCount) {
        // sort by recent
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else {
        return b.likes.likeCount - a.likes.likeCount;
      }
    } else return b.comments.length - a.comments.length;
  };

  let followingUsersUsernames;
  let userSpecificPosts;
  let sortedList;

  if (fetchingUsers == "fulfilled" && fetchingPosts == "fulfilled") {
    const currentLoggedInUser = users.find(
      (item) => item.username == user.username
    );

    followingUsersUsernames = currentLoggedInUser.following?.map(
      (item) => item.username
    );

    userSpecificPosts = posts.filter(
      (post) =>
        followingUsersUsernames.includes(post.username) ||
        post.username == currentLoggedInUser.username
    );

    sortedList = [...userSpecificPosts].sort(
      sortBy === "trending"
        ? trendingFirst
        : sortBy == "latest"
        ? latestFirst
        : oldestFirst
    );
  }

  return (
    <>
      <section className="posts-filters-wrapper gutter-bottom-16">
        <button
          className={`btn btn-rc filter-btn ${
            sortBy == "latest" && "filter-btn-selected"
          }`}
          onClick={() => setSortBy("latest")}
        >
          Latest
        </button>
        <button
          className={`btn btn-rc filter-btn ${
            sortBy == "trending" && "filter-btn-selected"
          }`}
          onClick={() => setSortBy("trending")}
        >
          Trending
        </button>
        <button
          className={`btn btn-rc filter-btn ${
            sortBy == "oldest" && "filter-btn-selected"
          }`}
          onClick={() => setSortBy("oldest")}
        >
          Oldest First
        </button>
      </section>
      <div className="posts-wrapper">
        {fetchingPosts == "fulfilled" &&
          (sortedList?.length > 0 ? (
            sortedList.map((post) => <Post key={post._id} {...post} />)
          ) : (
            <p className="text-center">No posts to show</p>
          ))}
      </div>
    </>
  );
};

export default Home;
