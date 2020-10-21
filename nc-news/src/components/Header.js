import React from "react";
import largeHeaderLogo from '../img/emptyIMG.png'
import { Link } from "@reach/router";



const Header = (props) => {
  return (
    <header className="App-header">

      <nav>
        <Link to={`/`}>
        <img className='headerlogo' src={largeHeaderLogo} alt='' />
        </Link>
        <ul >
          <li>
          <Link to={`/`}>
        <img className='homeIcon' src={largeHeaderLogo} alt='' />
        </Link>
          </li>
          <li>
          <Link to={`/`}>
        <img className='articlesIcon' src={largeHeaderLogo} alt='' />
        </Link>
          </li>
                    <li>
          <Link to={`/`}>
        <img className='articlesIcon' src={largeHeaderLogo} alt='' />
        </Link>
          </li>
        </ul>

       </nav>
    </header>
  );
};

export default Header;
