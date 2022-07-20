import React from "react";
import { NavLink } from "react-router-dom";



function NavBar() {
  return (
  <div className="navbar">
    <li> <NavLink to ="/">Home</NavLink></li><br></br>
    <li><NavLink to ="/movies">Movies</NavLink></li><br></br>
    <li><NavLink to ="/directors">Directors</NavLink></li><br></br>
    <li><NavLink to ="/actors">Actors</NavLink></li><br></br>

  </div>
  )
}

export default NavBar;
