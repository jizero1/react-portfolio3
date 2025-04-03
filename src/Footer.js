import './Footer.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom';

const Footer = () => {


  const [footerView, setFooterView] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/menu') {
      setFooterView(false)
    }
    else {
      setFooterView(true);
    }
  }, [location.pathname]);

  return (
    footerView && (
      <div className="footer common-flex">
        <p>2025.03 CHOI JIYOUNG PORTFOLIO</p>
      </div>
    )
  )
}

export default Footer;