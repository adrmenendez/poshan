import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <nav className='navbar'>
        <section className='navbar_content container'>
          <h1 className='navbar_logo'>
            <a href='../index.html'>poshan</a>
          </h1>

          <ul className='navbar_menu'>
            <li>
              <Link className='navbar_menu_item' to='/blog'>
                BLOG
              </Link>
            </li>

            <li className='navbar_menu_item'>|</li>
            <li>
              <Link className='navbar_menu_item' to='/contact'>
                CONTACT
              </Link>
            </li>
          </ul>
        </section>
      </nav>
    );
  }
}

export default NavBar;
