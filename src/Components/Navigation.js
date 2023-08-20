import React from "react";
import {Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <div>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/Signup">Signup</Link>
          </li>
    </div>
  );
  // return (
  //   <Nav>
  //   <NavItem>
  //       <NavLink active href="/About">
  //         About
  //       </NavLink>
  //     </NavItem>
  //     <NavItem>
  //       <NavLink active href="/Home">
  //         Home
  //       </NavLink>
  //     </NavItem>
  //     <NavItem>
  //       <NavLink active href="/Dashboard">
  //         Dashboard
  //       </NavLink>
  //     </NavItem>
  //     <NavItem>
  //       <NavLink active href="/Signin">
  //         Signin
  //       </NavLink>
  //     </NavItem>
  //     <NavItem>
  //       <NavLink active href="/Signup">
  //         Signup
  //       </NavLink>
  //     </NavItem>
  //   </Nav>
  // );
};

export default Navigation;
