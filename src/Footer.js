import React from 'react';
import { FaHome, FaHistory, FaHeadset, FaCog, FaSignInAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="/home" title="Home"><FaHome /></a>
        <a href="/history" title="History"><FaHistory /></a>
        <a href="/support" title="Support"><FaHeadset /></a>
        <a href="/settings" title="Settings"><FaCog /></a>
        <a href="/login" title="Login"><FaSignInAlt /></a>
      </div>
    </footer>
  );
};

export default Footer;
