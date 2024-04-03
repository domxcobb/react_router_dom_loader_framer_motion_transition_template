import {useEffect, useState} from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import './App.css';

import Loader from "./components/Loader";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from './components/Contact';


function App() {

  // set loader true/false
  const [loading, setLoading] = useState(true);
  // add loading class to <body> id while loading is true
  useEffect( () => {
    loading
    ? document.querySelector("body").classList.add("loading")
    : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  // get location for react-router-dom 
  const location = useLocation();

  return (
    <>
      {
        // if loading true = return Loader component
        // else loading false = return react fragment <>
        loading ? (
          
          <Loader setLoading={setLoading} />

        ) : (

          <>
            <Nav />
          
            {/* AnimatePresence for transition to work in sync with the routing */}
            <AnimatePresence mode="wait">
        
              <Routes location={location} key={location.pathname}>
                <Route index element={<Home />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/contact"} element={<Contact />} />
              </Routes>
          
            </AnimatePresence >
          </>

        )
      }
    </>
  );
}

export default App;
