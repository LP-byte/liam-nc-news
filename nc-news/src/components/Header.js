import React from "react";
import logoPlaceholder from '../img/emptyIMG.png'
import largeHeaderLogo from '../img/headerLogopng.png'
import smallHeaderLogo from '../img/mobileHeaderLogo.png'

import { Link } from "@reach/router";
import '../css/header.css'



const Header = (props) => {
  return (
    <header>

      <nav>
        <Link to={`/`}>
        <img className='headerlogo' src={largeHeaderLogo}  alt={smallHeaderLogo} />
        </Link>
        <ul className = 'navlist'>
          <li>
          <Link to={`/`}>
        <img className='homeIcon' src={logoPlaceholder} alt='' />
        </Link>
          </li>
          <li>
          <Link to={`/`}>
        <img className='articlesIcon' src={logoPlaceholder} alt='' />
        </Link>
          </li>
                    <li>
          <Link to={`/`}>
        <img className='articlesIcon' src={logoPlaceholder} alt='' />
        </Link>
          </li>
        </ul>

       </nav>
    </header>
  );
};

export default Header;
