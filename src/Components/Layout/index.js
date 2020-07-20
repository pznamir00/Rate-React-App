import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import './style.scss';




const Header = () => {
  return(
    <header>
      <nav className="navbar-expand-xl navbar-light">
        <div className="container">
          <div className="row">
            <Link to='/' id="logo" className="col-3 navbar-brand"><b>CHECK</b>RATE</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                <span className="dark-blue-text"><i className="fa fa-bars"></i></span>
            </button>
            <nav className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="col-10 text-center">
                <Link to='/' className='header-link'><i className="fa fa-home mr-3"></i>Home</Link>
                <Link to='/historical' className='header-link'><i className="fa fa-history mr-3"></i>Historical</Link>
                <Link to='/contact' className='header-link'><i className="fa fa-envelope mr-3"></i>Contact</Link>
                <Link to='/about' className='header-link'><i className="fa fa-info mr-3"></i>About</Link>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
}



const Loader = () => {
  const moveLoader = () => {
    $('#loader').animate({
      top: '-2000px',
    }, 1200, function(){
      $(document).remove('#loader');
    });
  }

  window.onload = moveLoader;
  return (
    <div id="loader">
      <i className="fa fa-money"></i>
    </div>
  );
}



const Footer = () => {
  const copyRights = String.fromCharCode(169);
  return (
    <footer>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/historical'>Historical</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/about'>About application</Link></li>
      </ul>
      <div id="copy-rights">All rights reserved {copyRights} 2020</div>
    </footer>
  );
}


export {
  Header,
  Loader,
  Footer
};
