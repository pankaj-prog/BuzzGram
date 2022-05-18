import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <main className="gutter-bottom-32 auth-main-wrapper">
      <section className="auth-box">
        <h1 className="auth-box-heading h4">Sign up </h1>
        <form action="" className="auth-form">
          <div className="input-container">
            <label htmlFor="input-name">
              <i className="fas fa-user"></i>
            </label>
            <input
              type="text"
              name="name"
              id="input-name"
              placeholder="Full Name"
            />
          </div>
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
            <input type="checkbox" className="checkbox" name="" id="checkbox" />{" "}
            <label htmlFor="checkbox">
              I’m in for emails with exciting discounts and personalized
              recommendations
            </label>
          </div>
          <button type="button" className="auth-btn form-btn btn-rc">
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
