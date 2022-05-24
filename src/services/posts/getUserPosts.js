export const getUserPosts = ({ posts, username }) => {
  return posts.filter((post) => post.username == username);
};
