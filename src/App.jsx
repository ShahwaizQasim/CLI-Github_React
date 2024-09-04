import { useState } from "react";
import "./style.css";
import "./responsive.css"
import Nav from "./nav.jsx";
import MainSec from "./mainSection.jsx";
import MiddleSections from "./middleSections.jsx";
import Footer from "./footer.jsx";

function App() {
  return (
    <>
      <Nav />
      <MainSec />
      <MiddleSections />
      <Footer />
    </>
  );
}

export default App;
