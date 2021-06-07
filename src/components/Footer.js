import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <section className='footer_content container'>
          <ul className='footer_menu'>
            <li>
              <a href='../contact.html' className='footer_menu--item'>
                Do you need help?
              </a>
            </li>
            <li>
              <a href='../blog.html' className='footer_menu--item'>
                Blog
              </a>
            </li>
          </ul>
          <ul className='footer_content_copy'>
            <li className='copy-list'>
              <a href='#' className='font_small'>
                <small>Copyrigth © 2021</small>
              </a>
              <span className='font_small'>|</span>
              <a href='#' className='font_small'>
                <small>poshan</small>
              </a>
            </li>
            <li className='copy-list'>
              <a href='#' className='font_small'>
                <small>Terms & Conditions</small>
              </a>
              <span className='font_small'>|</span>
              <a href='#' className='font_small'>
                <small>Privacy Policy</small>
              </a>
            </li>
          </ul>
        </section>
      </footer>
    );
  }
}

export default Footer;
