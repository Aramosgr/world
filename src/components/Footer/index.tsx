import React from 'react';

import './Footer.scss';

interface IFooterProps {}

const Footer = (props: IFooterProps) => {
  return (
    <footer className="footer">
      <div className="footer__powered-by-logo"></div>
    </footer>
  );
};

export default Footer;
