import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';



class Footer extends Component {

  render(){
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
}



export default Footer;
