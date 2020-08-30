import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarContainer } from '../Sidebar';
import './style.scss';



const Header = () => {
  return(
    <header>
      <nav className="navbar-expand-xl navbar-light">
        <div className="container">
          <div className="row">
            <Link to='/' id="logo" className="col-6 col-xl-3 navbar-brand"><b>check</b>rate.</Link>
            <div className="d-none d-xl-block mt-3">
              <Link to='/' className='header-link'><i className="fa fa-home mr-3"></i>Home</Link>
              <Link to='/historical' className='header-link'><i className="fa fa-history mr-3"></i>Historical</Link>
              <Link to='/contact' className='header-link'><i className="fa fa-envelope mr-3"></i>Contact</Link>
              <Link to='/about' className='header-link'><i className="fa fa-info mr-3"></i>About</Link>
            </div>
            <SidebarContainer/>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
