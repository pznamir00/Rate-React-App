import React from 'react';
import $ from 'jquery';
import './style.scss';


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

export default Loader;
