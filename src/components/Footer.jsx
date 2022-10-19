import React, { useState, useEffect } from "react";
import "./Footer.css";
function Footer() {
  //   const current = new Date().toLocaleString();
  const [time, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    const interval = setInterval(() => setTime(Date().toLocaleString()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="foot">
        <h6 className="rights">
          Email: singhanish124@gmail.com
         
        </h6>
        <h6> mob. : +917870800803</h6>
        <div className="date">
          <h3>Current Date & Time is : {time}</h3>
        </div>
      </div>
    </>
  );
}

export default Footer;