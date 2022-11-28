import "./sidebar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Toolbar } from "@mui/material";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.reload();
  };

  return (
    <main className={show ? "space-toggle" : null}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? "fa-solid fa-xmark" : null}`}></i>
          <Toolbar>
            <span>Home</span>
          </Toolbar>
        </div>
      </header>

      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          <div>
            <Link to="/" className="nav-logo">
              <i className={`fas fa-home-alt nav-logo-icon`}></i>
              <span className="nav-logo-name">Homepage</span>
            </Link>
            <div className="nav-list">
              <Link to="/dashboard" className="nav-link active">
                <i className="fas fa-tachometer-alt nav-link-icon"></i>
                <span className="nav-link-name">Dashboard</span>
              </Link>
              <Link to="/hotel" className="nav-link">
                <i className="fa-solid fa-chalkboard-user nav-link-icon"></i>{" "}
                <span className="nav-link-name">Teacher</span>
              </Link>
              <Link to="/gallery" className="nav-link">
                <i className="fa-solid fa-graduation-cap"></i>
                <span className="nav-link-name nav-link-icon">Student</span>
              </Link>
              <Link to="/gallery" className="nav-link">
                <i className="fa-solid fa-scroll"></i>
                <span className="nav-link-name nav-link-icon">
                  Announcements
                </span>
              </Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>

          {/* <Link to='/logout' className='nav-link'>
              <i className='fas fa-sign-out nav-link-icon'></i>
              <span className='nav-link-name'>Logout</span>
            </Link> */}
        </nav>
      </aside>
    </main>
  );
};

export default Sidebar;
