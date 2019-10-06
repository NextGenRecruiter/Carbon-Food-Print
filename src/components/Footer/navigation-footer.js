import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export const Footer = (props) => {
  return (
    <footer className="app-footer">
      <Link to={props.link}>
        {props.title}
      </Link>
    </footer>
  )
};

export default Footer;