import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import devtoolIcon from "../images/devtools.gif";

export default function Header(props) {
  const { header } = props;

  return (
    <header className="header">
      <div className="note-div">
        {header.notification_bar.show_announcement ? (
          parse(header.notification_bar.announcement_text)
        ) : (
          <div style={{ visibility: "hidden" }}>Devtools section</div>
        )}
        <span
          className="devtools"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <img src={devtoolIcon} alt="devtools-icon" title="Json Preview" />
        </span>
      </div>
      <div className="max-width header-div">
        <div className="wrapper-logo">
          <Link to="/" title="Contentstack">
            <img
              className="logo"
              src={header.logo.url}
              alt={header.logo.filename}
            />
          </Link>
        </div>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon" />
        </label>
        <nav className="menu">
          <ul className="nav-ul header-ul">
            {header.navigation_menu.map((list) => (
              <li key={list.label} className="nav-li">
                <Link
                  to={list.page_reference[0].url}
                  className={props.activeTab === list.label ? "active" : ""}
                >
                  {list.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
