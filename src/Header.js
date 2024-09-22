import React from 'react';
import { Helmet } from 'react-helmet';

function Header() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Helmet>
      <header className="header">
        {/* Votre contenu du header */}
        <div className="language-switch">
          <i className="fas fa-globe"></i> {}
        </div>
      </header>
    </>
  );
}

export default Header;
