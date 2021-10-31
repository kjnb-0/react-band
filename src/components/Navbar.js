//shortcut - type rafc to automatically create a starting script
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
          {/* for mobile view - one LI in header, others in fold down menu  */}
          <a href="/#" id="openup">
            Band Name Goes Here!
          </a>
        </nav>
      </header>
    </div>
  );
};
