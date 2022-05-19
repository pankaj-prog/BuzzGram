import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signUpUser } from "redux/reducers/authSlice";
import { validatePassword } from "utils/validatePassword";

const SignUp = () => {
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const nameRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();

  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const signUpHandler = () => {
    setIsPasswordValid(true);
    if (validatePassword(passwordRef.current.value)) {
      dispatch(
        signUpUser({
          name: nameRef.current.value,
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        })
      );
    } else {
      setIsPasswordValid(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn && location?.state?.from?.pathname) {
      navigate(location.state.from.pathname);
    } else if (isLoggedIn) {
      navigate("/user/allnotes");
    }
  }, [isLoggedIn]);

  return (
    <main className="gutter-bottom-32 auth-main-wrapper">
      <section className="auth-box">
        <h1 className="auth-box-heading h4">Sign up </h1>
        <form className="auth-form">
          <div className="input-container">
            <label htmlFor="input-name">
              <i className="fas fa-user"></i>
            </label>
            <input
              type="text"
              name="name"
              id="input-name"
              placeholder="Full Name"
              ref={nameRef}
            />
          </div>
          <div className="input-container">
            <label htmlFor="input-username">
              <i className="fas fa-user"></i>
            </label>
            <input
              required
              type="text"
              name="username"
              id="input-username"
              placeholder="Username"
              ref={usernameRef}
            />
          </div>
          <div className="input-container">
            <label htmlFor="input-password">
              <i className="fas fa-lock"></i>
            </label>
            <input
              type="password"
              name="password"
              id="input-password"
              placeholder="Password"
              ref={passwordRef}
            />
          </div>
          {!isPasswordValid && <p className="error-message">Weak password</p>}
          <p className="text-muted text-sm">
            Password should contain uppercase letter, smallcase letter and be
            minimum 6 char long
          </p>
          <div className="checkbox-input-container">
            <input type="checkbox" className="checkbox" name="" id="checkbox" />{" "}
            <label htmlFor="checkbox">
              I’m in for emails with exciting discounts and personalized
              recommendations
            </label>
          </div>
          <button
            type="button"
            className="auth-btn form-btn btn-rc"
            onClick={(e) => signUpHandler(e)}
          >
            Sign up
          </button>
          <p className="text-muted text-sm form-alert text-center">
            By signing up, you agree to our Terms of Use and Privacy Policy.
          </p>
        </form>
        <footer className="auth-box-footer">
          Already have an account ?
          <button className="btn btn-link-primary ">
            <Link className="link" to="/login">
              {" "}
              Log in
            </Link>
          </button>
        </footer>
      </section>
    </main>
  );
};

export default SignUp;
