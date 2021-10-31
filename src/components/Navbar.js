import React from "react";

export const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="cf">
          <ul className="cf">
            <li className="hide-on-small">
              <a href="/#" className="bold">
                Band Name Goes Here!
              </a>
            </li>
            <li className="hide-on-small">
              <a href="/#" className="bold">
                Show Schedule
              </a>
            </li>
            <li className="hide-on-small">
              <a href="/#" className="bold">
                Social / Connect
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
