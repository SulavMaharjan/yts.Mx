import React, { useState } from "react";
import "../assets/css/navbar.css";
import { IconSearch } from "@tabler/icons-react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "4K" },
    { path: "/contact", label: "Trending" },
    { path: "/service", label: "Browse Movies" },
  ];

  return (
    <div>
      <div className="navigationBar">
        <div className="logo">
          <img src="https://yts.mx/assets/images/website/logo-YTS.svg" alt="" />
        </div>
        <p>HD movies at the smallest file size.</p>
        <div className="search">
          <IconSearch stroke={2} className="search-icon" />
          <input
            className="search-input"
            type="text"
            placeholder="Quick search"
          />
        </div>
        <div className="navitem">
          {navItems.map((item, key) => (
            <div key={key}>
              <p>{item.icon}</p>
              <a className="items" href={item.path}>
                {item.label}
              </a>
            </div>
          ))}
        </div>
        <div>
          <button onClick={() => setToggle(!toggle)} className="login-btn">
            Login
          </button>

          <div>
            {toggle && (
              <div className="Login">
                {/* {login ? <div>signup</div> : <div>Login</div>} */}
                <div className="log-title">
                  <div className="main-login">Login</div>
                  <div className="main-register">Register</div>
                </div>

                <div className="credentials">
                  <input
                    type="text"
                    placeholder="Username or email"
                    className="userInput"
                  />
                  <input
                    type="text"
                    placeholder="password"
                    className="passInput"
                  />
                </div>

                <button className="logged">Login</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
