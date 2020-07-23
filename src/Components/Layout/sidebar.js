import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';



const Sidebar = () => {
  const [left, setLeft] = useState('-300px');
  const viewHandle = () => setLeft(left === '0px' ? '-300px' : '0px');
  $('.header-link').on('click', () => setLeft('-300px'));

  useEffect(() => {
    $('#sidebar').animate({
      left: left
    }, 200);
  });

  return (
    <nav>
      <button className="navbar-toggler" type="button" data-toggle="collapse" onClick={viewHandle}>
          <span className="dark-blue-text"><i className="fa fa-bars"></i></span>
      </button>
      <div className="d-xl-none" id="sidebar">
        <h2 className="text-center mt-3 mb-5">Menu</h2>
        <Link to='/' className='header-link'><i className="fa fa-home mr-3"></i>Home</Link>
        <Link to='/historical' className='header-link'><i className="fa fa-history mr-3"></i>Historical</Link>
        <Link to='/contact' className='header-link'><i className="fa fa-envelope mr-3"></i>Contact</Link>
        <Link to='/about' className='header-link'><i className="fa fa-info mr-3"></i>About</Link>
      </div>
    </nav>
  );
}


export default Sidebar;
