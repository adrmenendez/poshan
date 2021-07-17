import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <section className='footer_content container'>
          <ul className='footer_menu'>
            <li>
              <Link to='/contact' className='footer_menu--item'>
                Do you need help?
              </Link>
            </li>
            <li>
              <a href='../blog.html' className='footer_menu--item'>
                Blog
              </a>
            </li>
          </ul>
          <ul className='footer_content_copy'>
            <li className='copy-list'>
              <span className='font_small'>Copyrigth © 2021 | poshan</span>
            </li>
            {/* <li className='copy-list'>
              <a href='#' className='font_small'>
                Terms & Conditions
              </a>
              <span className='font_small'>|</span>
              <a href='#' className='font_small'>
                Privacy Policy
              </a>
            </li> */}
          </ul>
        </section>
      </footer>
    );
  }
}

export default Footer;
