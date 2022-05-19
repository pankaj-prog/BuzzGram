import { Post } from "components";
import React from "react";

const Profile = () => {
  return (
    <>
      <div className="page-header gutter-bottom-16 border-all-thin ">
        <section className="profile-wrapper ">
          <span className="avatar avatar-round">
            <img
              className="responsive-img"
              src="https://adaptiveui.netlify.app/src/assets/avatar-default.png"
              alt="...."
            />
          </span>
          <div>
            <h4>
              Pankaj Wadhwani{" "}
              <button className="btn btn-rc btn-solid-secondary">
                Edit Profile
              </button>
            </h4>
            <h5 className="text-muted fw-r gutter-bottom-8">@pankajw01</h5>
            <p className="user-bio gutter-bottom-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="user-info">
              <span className="fw-b text-center">2 posts</span>
              <span className="fw-b text-center">3 followers</span>
              <span className="fw-b text-center">8 following</span>
            </div>
          </div>
        </section>
      </div>
      <section className="posts-type-wrapper gutter-bottom-16 border-all-thin">
        <button className="btn post-type-selected">My Posts</button>
        <button className="btn">Bookmarks</button>
      </section>
      <section className="posts-wrapper">
        <Post />
        <Post />
      </section>
    </>
  );
};

export default Profile;
