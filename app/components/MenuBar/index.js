/**
 *
 * MenuBar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MenuBar() {
  return (
    <div className="container-fluid ">
  
   <nav className="flex-column">  
       <ul className=" navbar-nav " >
       <li className="nav-item" >
      <Link  className="nav-link text-light" to="/">
          Home
      </Link>
      </li>
      {!JSON.parse(localStorage.getItem('userInfo')) ? (
      <li className="nav-item " >
      <Link  className="nav-link text-light" to="/public">
          Public
      </Link>
      </li>):(
      <li className="nav-item " >
      <Link  className="nav-link text-light" to="/profile">
          Profile
      </Link>
      </li>
      )}
      <li className="nav-item" >
      <Link className=" nav-link text-light pl-0" to="/government">
          Government
      </Link>
      </li>
      <li className="nav-item" >
      <Link className="nav-link text-light pl-0" to="/election">
       Elections
      </Link>
      </li>
      <li className="nav-item" >
      <Link className="nav-link text-light pl-0" to="/constitution">
      Constitution
      </Link>
      </li>

    
    
      <li className="nav-item">
      <Link className="nav-link text-light pl-0" to="/about">
      About
      </Link>
      </li>
      </ul>
       </nav>
   
   {/* <nav className=" border  col-sm-3 h-100 ">
      <div className="col-sm-12 " id="fixed-sidebar">
        <ul>
        <li className="fuente-fjalla ul-personalizada">
      <Link  className="font-style menu-buttons" to="/private">
       Private
      </Link>
      </li>
      <li className="fuente-fjalla ul-personalizada">
      <Link  className="font-style menu-buttons" to="/public">
          Public
      </Link>
      </li>
      <li className="fuente-fjalla ul-personalizada">
      <Link className="font-style menu-buttons" to="/governoment">
          Governoment
      </Link>
      </li>
      <li className="fuente-fjalla ul-personalizada">
      <Link className="font-style menu-buttons" to="/election">
       Elections
      </Link>
      </li>
      <li className="fuente-fjalla ul-personalizada">
      <Link className="font-style menu-buttons" to="/policy">
      Policy
      </Link>
      </li>
    
      <li className="fuente-fjalla ul-personalizada">
      <Link className="font-style menu-buttons" to="/about">
      About
      </Link>
      </li>
      </ul>
      </div>
    </nav>
  */}
  </div>
  );
}

MenuBar.propTypes = {};

export default MenuBar;
