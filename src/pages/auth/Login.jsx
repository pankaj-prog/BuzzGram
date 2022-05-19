import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="gutter-bottom-32 auth-main-wrapper">
      <section className="auth-box">
        <h1 className="auth-box-heading h4">Log in to your account</h1>
        <form action="" className="auth-form">
          <div className="input-container">
            <label htmlFor="input-email">
              <i className="fas fa-envelope"></i>
            </label>
            <input
              type="email"
              name="email"
              id="input-email"
              placeholder="Email"
            />
          </div>
          <p className="error-message">Email address is not valid</p>
          <div className="input-container">
            <label htmlFor="input-password">
              <i className="fas fa-lock"></i>
            </label>
            <input
              type="password"
              name="password"
              id="input-password"
              placeholder="Password"
            />
          </div>
          <div className="checkbox-input-container">
            <input type="checkbox" className="checkbox" id="show-password" />{" "}
            <label htmlFor="show-password">Show password</label>
          </div>
          <button type="button" className="btn auth-btn form-btn btn-rc">
            Sign in
          </button>
          <button
            type="button"
            className="btn btn-link-primary btn-forgot-password"
          >
            Forgot password
          </button>
          <p className="form-guide text-muted text-center">
            Or sign in with test user
          </p>
          <button type="button" className="text-center form-btn btn-rc">
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
