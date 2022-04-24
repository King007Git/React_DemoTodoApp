import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (<>
    <div className="card text-center" style={
      {
        //position: "fixed",
        //top: "100vh",
        //bottom:"0vh",
        width: "100%"
      }
    }>
      <div className="card-body bg-dark text-light">
        <h5 className="card-title">Keshav Trivedi</h5>
        <p className="card-text">Tcs Ignite</p>
        <Link to="contact" style={
          {
            textDecoration:"none",
            color:"whitesmoke",
            fontStyle:"italic"
          }
        }>More Info</Link>
      </div>
    </div>
  </>);
}
export default Footer;