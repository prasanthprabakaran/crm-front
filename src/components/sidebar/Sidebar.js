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
        </div>
        <Toolbar className="toolbar">
            <span>Home</span>
            <div>
              <i class="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </div>
          </Toolbar>
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
                <i className="fa-solid fa-users nav-link-icon"></i>
                <span className="nav-link-name">Customer</span>
              </Link>
              <Link to="/gallery" className="nav-link">
                <i class="fa-solid fa-clipboard-list nav-link-icon"></i>
                <span className="nav-link-name">Open Tickets</span>
              </Link>
              <Link to="/gallery" className="nav-link">
                <i className="fa-solid fa-clipboard-check nav-link-icon"></i>
                <span className="nav-link-name">Closed Tickets</span>
              </Link>
              <button onClick={handleLogout}>
                <i class="fas fa-sign-out-alt nav-link-icon"></i>
              </button>
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
