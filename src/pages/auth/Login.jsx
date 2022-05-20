import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "redux/reducers/authSlice";
import { validatePassword } from "utils/validatePassword";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const usernameRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const loginClickHandler = () => {
    setIsPasswordValid(true);
    if (usernameRef.current.value) {
      if (validatePassword(passwordRef.current.value)) {
        dispatch(
          loginUser({
            username: usernameRef.current.value,
            password: passwordRef.current.value,
          })
        );
      } else {
        setIsPasswordValid(false);
      }
    } else {
      toast.error("Username should not be empty");
    }
  };

  const guestLoginHandler = () => {
    dispatch(
      loginUser({
        username: "adarshbalik",
        password: "adarshBalik123",
      })
    );
  };

  useEffect(() => {
    if (isLoggedIn && location?.state?.from?.pathname) {
      navigate(location.state.from.pathname);
    } else if (isLoggedIn) {
      navigate("/home", { replace: true });
    }
  }, [isLoggedIn]);

  return (
    <main className="gutter-bottom-32 auth-main-wrapper">
      <section className="auth-box">
        <h1 className="auth-box-heading h4">Log in to your account</h1>
        <form action="" className="auth-form">
          <div className="input-container">
            <label htmlFor="input-username">
              <i className="fas fa-user"></i>
            </label>
            <input
              type="text"
              name="username"
              id="input-username"
              placeholder="Username..."
              ref={usernameRef}
            />
          </div>
          <div className="input-container">
            <label htmlFor="input-password">
              <i className="fas fa-lock"></i>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="input-password"
              placeholder="Password"
              ref={passwordRef}
            />
          </div>
          {!isPasswordValid && (
            <p className="error-message">Inavlid password</p>
          )}
          <p className="text-muted text-sm">
            Password must contain uppercase letter, smallcase letter and be
            minimum 6 char long
          </p>
          <div className="checkbox-input-container">
            <input
              type="checkbox"
              className="checkbox"
              id="show-password"
              onChange={() => setShowPassword((prev) => !prev)}
            />{" "}
            <label htmlFor="show-password">Show password</label>
          </div>
          <button
            onClick={loginClickHandler}
            type="button"
            className="btn auth-btn form-btn btn-rc"
          >
            Log in
          </button>
          <p className="form-guide text-muted text-center">
            Or sign in with test user
          </p>
          <button
            type="button"
            className="text-center form-btn btn-rc"
            onClick={guestLoginHandler}
          >
            <i className="fas fa-user"></i> Guest Login
          </button>
          <footer className="auth-box-footer">
            Don't have an account ?
            <button className="btn btn-link-primary">
              <Link className="link" to="/signup">
                {" "}
                Sign-up
              </Link>
            </button>
          </footer>
        </form>
      </section>
    </main>
  );
};

export default Login;
