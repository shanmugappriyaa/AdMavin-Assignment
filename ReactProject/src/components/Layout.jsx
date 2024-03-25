import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";

function Layout() {
  const location = useLocation();
  const [screen, setScreen] = useState(
    location.pathname === "/" 
  );

  useEffect(() => {
    setScreen(
      location.pathname === "/" 
    );
  }, [location]);
  return (
    <>
      <Header />

      <div className="parent-layout">
        <div className="layout">
      
            <Outlet />
          </div>
        </div>
  
    </>
  );
}

export default Layout;