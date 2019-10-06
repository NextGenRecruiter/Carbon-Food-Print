import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export const Footer = (props) => {
  return (
    <footer className="app-footer">
      <Link to={props.dashboardLink}>
        {props.titleDashboardLink}
      </Link>
      <Link to={props.homeLink}>
        {props.titleHomeLink}
      </Link>
      <Link to={props.summaryLink}>
        {props.titleSummaryLink}
      </Link>
    </footer>
  )
};

export default Footer;