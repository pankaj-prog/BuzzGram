import { Post } from "components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditProfileModal } from "components";
import { getUser } from "services/user/getUser";
import { useParams } from "react-router-dom";
import { getUserPosts } from "services";
import { getBookmarks } from "redux/reducers/postsSlice";
import { followUser, unfollowUser } from "redux/reducers/usersSlice";

const Profile = () => {
  const [currentProfileUser, setCurrentProfileUser] = useState(null);
  const [selectedTab, setSelectedTab] = useState("posts");
  const { users } = useSelector((state) => state.users);
  const { posts, fetchingPosts, bookmarks } = useSelector(
    (state) => state.posts
  );
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const { username } = useParams();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (username) {
      getUser({ username, setCurrentProfileUser });
    }
  }, [users, username]);

  useEffect(() => {
    dispatch(getBookmarks());
  }, []);

  let userPosts;
  if (fetchingPosts == "fulfilled" && currentProfileUser) {
    userPosts = getUserPosts({ username: currentProfileUser.username, posts });
  }

  const isFollowing = currentProfileUser?.followers.some(
    (item) => item.username === user?.username
  );

  return currentProfileUser ? (
    <>
      <div className="page-header gutter-bottom-16 border-all-thin ">
        <section className="profile-wrapper ">
          <span className="avatar avatar-round">
            <img
              className="responsive-img"
              src={currentProfileUser.profile_pic}
            />
          </span>
          <div>
            <h4>
              {currentProfileUser.name}{" "}
              {currentProfileUser.username == user.username ? (
                <button
                  className="btn btn-rc btn-solid-secondary"
                  onClick={() => setShowEditProfileModal(true)}
                >
                  Edit Profile
                </button>
              ) : isFollowing ? (
                <button
                  className="btn btn-solid-secondary btn-rc"
                  onClick={() =>
                    dispatch(
                      unfollowUser({
                        followUserId: currentProfileUser._id,
                      })
                    )
                  }
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className="btn btn-solid-secondary btn-rc"
                  onClick={() =>
                    dispatch(
                      followUser({
                        followUserId: currentProfileUser._id,
                      })
                    )
                  }
                >
                  Follow
                </button>
              )}
            </h4>
            <h5 className="text-muted fw-r gutter-bottom-8">
              @{currentProfileUser.username}
            </h5>
            <p className="user-bio ">{currentProfileUser.bio}</p>
            <p className="gutter-bottom-8">
              <a href={currentProfileUser.website}>
                {currentProfileUser.website}
              </a>
            </p>
            <div className="user-info">
              <span className="fw-b text-center">2 posts</span>
              <span className="fw-b text-center">
                {currentProfileUser.followers.length} followers
              </span>
              <span className="fw-b text-center">
                {currentProfileUser.following.length} following
              </span>
            </div>
          </div>
        </section>
      </div>
      <section className="posts-type-wrapper gutter-bottom-16 border-all-thin">
        {currentProfileUser.username == user.username ? (
          <>
            <button
              className={`btn ${
                selectedTab == "posts" && "post-type-selected"
              }`}
              onClick={() => setSelectedTab("posts")}
            >
              My Posts
            </button>
            <button
              className={`btn ${
                selectedTab == "bookmarks" && "post-type-selected"
              }`}
              onClick={() => setSelectedTab("bookmarks")}
            >
              Bookmarks
            </button>
          </>
        ) : (
          <span className="btn post-type-selected">Posts</span>
        )}
      </section>
      <section className="posts-wrapper">
        {fetchingPosts == "fulfilled" &&
          selectedTab == "posts" &&
          (userPosts.length > 0 ? (
            userPosts.map((post) => <Post key={post._id} {...post} />)
          ) : (
            <p className="text-center">No posts to show</p>
          ))}

        {selectedTab == "bookmarks" &&
          (bookmarks.length > 0 ? (
            posts
              .filter((post) => bookmarks.includes(post._id))
              .map((post) => <Post key={post._id} {...post} />)
          ) : (
            <p className="text-center">No bookmarked posts</p>
          ))}
      </section>
      {showEditProfileModal && (
        <EditProfileModal setShowEditProfileModal={setShowEditProfileModal} />
      )}
    </>
  ) : (
    <p className="text-center">loading...</p>
  );
};

export default Profile;
