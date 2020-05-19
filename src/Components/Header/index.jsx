import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';



class Header extends Component {
  render(){
    return(
      <header>
        <Link to='/' className='header-link'><i className="fa fa-home mr-3"></i>Home</Link>
        <Link to='/historical' className='header-link'><i className="fa fa-history mr-3"></i>Historical</Link>
        <Link to='/contact' className='header-link'><i className="fa fa-envelope mr-3"></i>Contact</Link>
        <Link to='/about' className='header-link'><i className="fa fa-info mr-3"></i>About application</Link>
      </header>
    );
  }
}



export default Header;
