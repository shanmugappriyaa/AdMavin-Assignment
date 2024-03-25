import React, { useEffect } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import Assign4 from "../Assign4";
function Header() {
  let navigate = useNavigate();

  return (
    <>
      <div className="header">
        <div className="head">
          <h1>React Assignments</h1>
        </div>
        <div className="home">
          <NavLink
            to="/assign1"
            className={({ isActive, isPending }) =>
              isPending ? "pending_nav" : isActive ? "active_nav" : "text-decor"
            }
          >
            Assignment1
          </NavLink>
          <NavLink
            to="/assign2"
            className={({ isActive, isPending }) =>
              isPending ? "pending_nav" : isActive ? "active_nav" : "text-decor"
            }
          >
            Assignment2
          </NavLink>
          <NavLink
            to="/assign3"
            className={({ isActive, isPending }) =>
              isPending ? "pending_nav" : isActive ? "active_nav" : "text-decor"
            }
          >
            Assignment3
          </NavLink>
          <NavLink
            to="/assign4"
            className={({ isActive, isPending }) =>
              isPending ? "pending_nav" : isActive ? "active_nav" : "text-decor"
            }
          >
            Assignment4
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
