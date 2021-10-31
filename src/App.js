import "./App.css";
//fragment is react component that allows us to be a little more flexible with react language..
//..can break divs apart, etc

import React, { Fragment } from "react";

//components import
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";

function App() {
  return (
    <Fragment>
      <div id="showcase">
        <Navbar />
        <Header />
      </div>
    </Fragment>
  );
}

export default App;
