import "./App.css";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavMenu from "./components/NavMenu/NavMenu";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import NavMenuContainer from "./components/NavMenu/NavMenuContainer";
import ContentContainer from "./components/Content/ContentContainer";

function App() {
  const [nav, setNav] = useState(false);
  return (
    <div className="App">
      <Header nav={nav} setNav={setNav} />
      <NavMenuContainer nav={nav} setNav={setNav} />
      <ContentContainer />
      <Footer />
    </div>
  );
}

export default App;
