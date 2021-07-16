import React from 'react';
import header from '../images/header-2.jpg';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className='header' style={{ backgroundImage: `url(${header})` }}>
        <section className='header_content container'>
          <div
            className='header_content--img'
            // style={{ backgroundImage: `url(${header})` }}
          ></div>
          <div className='header_text'>
            <h2 className='header_content--title font_h1'>
              Personalized plans based on your goals.
            </h2>
            <h3 className='header_content--subtitle font_subtitle'>
              Eat what you really like, we just make the maths.
            </h3>
            <Link to='/start' className='header_content--submit'>
              Try it free
            </Link>
          </div>
        </section>
      </header>
    );
  }
}

export default Header;
