import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  AiOutlinePlus,
  AiOutlineHome,
  MdOutlineExplore,
  AiOutlineUser,
} from "assets/icons";
import { useDispatch } from "react-redux";
import { logoutUser } from "redux/reducers/authSlice";

const Header = () => {
  const [showUserWrapper, setShowUserWrapper] = useState();

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  const navigate = useNavigate();
  return (
    <div className="app-header-wrapper gutter-bottom-24">
      <header className="app-header">
        <h3 className="app-name">BuzzGram</h3>
        <button
          onClick={() => navigate("/newpost")}
          className="btn btn-solid-primary btn-rc"
        >
          <AiOutlinePlus /> Post
        </button>
        <nav className="nav-wrapper">
          <NavLink to="/home" className="btn-lg link">
            <AiOutlineHome />
          </NavLink>
          <NavLink to="/explore" className="btn-lg link">
            <MdOutlineExplore />
          </NavLink>
          <div className="user-btn-wrapper">
            <button className="btn user-btn btn-lg link">
              <AiOutlineUser />
            </button>
            <div className="user-wrapper">
              <button className="btn" onClick={() => navigate("/profile")}>
                My profile
              </button>
              <button className="btn" onClick={logoutHandler}>
                Logout
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
