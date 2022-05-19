import { Header } from "components";
import React from "react";
import { Link } from "react-router-dom";
const Page404 = () => {
  return (
    <>
      <h1 className="text-center gutter-bottom-24">BuzzGram</h1>
      <div className="text-center">
        <h5>Page not found</h5>
        <p>Check your URL and try again</p>
        <p>or</p>
        <Link to="/home">Go to homepage</Link>
      </div>
    </>
  );
};

export default Page404;
