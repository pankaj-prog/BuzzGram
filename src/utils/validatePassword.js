export const validatePassword = (password) => {
  if (password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)) {
    return true;
  }
  return false;
};
