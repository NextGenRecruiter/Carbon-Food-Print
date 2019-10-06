import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export const Footer = (props) => {
  return (
    <div className="App">
      <Link to={props.link}>
      <footer className="app-footer">
        <h1 className={'title'}>{props.title}</h1>
      </footer>
      </Link>
    </div>
  )
};

export default Footer;