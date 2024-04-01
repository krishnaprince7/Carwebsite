import React from "react";
import Navebar from "./components/Navebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Range from "./components/Range";

import Contact from "./components/Contact";
import Newapp from "./components/Newapp";


const App = () => {
  
  return (
    <div>
      <Navebar />
      <Hero />
      <About />
      <Service />
     <Range/>
     <Newapp/>
     <Contact/>
    </div>
  );
};

export default App;
