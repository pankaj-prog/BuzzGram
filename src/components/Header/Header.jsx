import React from "react";
import { NavLink } from "react-router-dom";

import {
  FiBookmark,
  AiOutlinePlus,
  AiOutlineHome,
  MdOutlineExplore,
  MdOutlineNotificationsNone,
  AiOutlineUser,
} from "assets/icons";

const Header = () => {
  return (
    <div className="app-header-wrapper gutter-bottom-24">
      <header className="app-header max-width">
        <h3 className="app-name">BuzzGram</h3>
        <button className="btn btn-solid-primary btn-rc">
          <AiOutlinePlus /> Post
        </button>
        <nav className="nav-wrapper">
          <NavLink to="/home" className="btn-lg link">
            <AiOutlineHome />
          </NavLink>
          <NavLink to="/explore" className="btn-lg link">
            <MdOutlineExplore />
          </NavLink>
          <NavLink to="/notification" className="btn-lg link">
            <MdOutlineNotificationsNone />
          </NavLink>
          <NavLink to="/bookmark" className="btn-lg link">
            <FiBookmark />
          </NavLink>
          <NavLink to="/profile" className="btn-lg link">
            <AiOutlineUser />
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
