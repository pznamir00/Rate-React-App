import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { connect } from 'react-redux';
import actions from '../../../redux/sidebar/actions';
import './style.scss';



const Sidebar = (props) => {

  const viewHandle = () => props.setLeft(props.left === '0px' ? '-300px' : '0px');
  $('.header-link').on('click', () => props.setLeft('-300px'));

  useEffect(() => {
    $('#sidebar').animate({
      left: props.left
    }, 200);
  });

  return (
    <nav>
      <button className="navbar-toggler" type="button" data-toggle="collapse" onClick={viewHandle}>
          <span className="dark-blue-text"><i className="fa fa-bars"></i></span>
      </button>
      <div className="d-xl-none" id="sidebar">
        <h2 className="text-center mt-3 mb-5">Menu</h2>
        <Link to='/' className='header-link'><i className="fa fa-home mr-3"></i>HOME</Link>
        <Link to='/historical' className='header-link'><i className="fa fa-history mr-3"></i>HISTORICAL</Link>
        <Link to='/contact' className='header-link'><i className="fa fa-envelope mr-3"></i>CONTACT</Link>
        <Link to='/about' className='header-link'><i className="fa fa-info mr-3"></i>ABOUT</Link>
      </div>
    </nav>
  );
}


const mapStateToProps = state => {
  return {
    left: state.sidebar.left
  }
}

const mapDispatchToProps = dispatch => ({
  setLeft: left => dispatch(actions.setLeft(left))
})

export const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)
