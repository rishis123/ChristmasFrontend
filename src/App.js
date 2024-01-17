import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
//dynamic navigating between different pages in React application
import React from 'react';

import SubmitEntry from "./components/Submit-entry.js"; 
// this is the CreateTodo file we made, just the relative file path for it --> we need to access it in the App method below

import HomePage from "./components/Home-page-component.js"; 
import logo from "/Users/rishishah/ChristmasProject/src/components/christmasDOOM.png";
import Sidebar from "/Users/rishishah/ChristmasProject/src/components/Sidebar.js"
import LightFinder from "./components/Light_Finder.js";
import "/Users/rishishah/ChristmasProject/src/components/global_styles.css";


function App() {
  return (
      <Router>
        {/* making a container to put all this */}
        <div className = "container"> 
        <div className = "header">
        <Sidebar/>

          {/* <nav className = "navbar navbar-expand-lg navbar-light bg-light"> 
            {/* navigation menu through Bootstrap -- remember className attribute lets us use various CSS styles on our React elements */}
            <Link to="/" rel="noreferrer">
              <img src={logo} width={100} height={100} left />
            </Link>
          </div>

          
          <Routes>  

            <Route path = "/" element = {<HomePage/>} />
            {/* maps a URL to React element. 

            Note: element vs. component -- element describes what will appear on screen, component can have multiple elements that accepts inputs


            Slash represents homepage/entry-point in URL (e.g., /about means you start at homepage then go to about page)
            When route matched (url with exact /) -render TodosList homepage */}

            <Route path = "/finder/:id" element = {<LightFinder/>} />

            <Route path = "/submit"  element = {<SubmitEntry/>} />
          {/* we have connected the 3 elements, now use the 3 component files (see components folder) to actually make the elements  */}
          {/* </div> */}
            
          </Routes>
        </div>
      </Router>
  );
}

export default App;
