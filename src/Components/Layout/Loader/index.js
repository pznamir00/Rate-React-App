import React from 'react';
import $ from 'jquery';
import './style.scss';


const Loader = () => {
  const moveLoader = () => {
    $('#loader').fadeToggle();
  }

  window.onload = moveLoader;
  return (
    <div id="loader">
      <i className="fa fa-money flip-scale-up-hor"></i>
    </div>
  );
}

export default Loader;
