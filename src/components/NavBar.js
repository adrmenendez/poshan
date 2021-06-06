import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <nav class='navbar'>
        <section class='navbar_content container'>
          <h1 class='navbar_logo'>
            <a href='../index.html'>poshan</a>
          </h1>

          <ul class='navbar_menu'>
            <li>
              <a class='navbar_menu_item' href='../blog.html'>
                BLOG
              </a>
            </li>
            <li class='navbar_menu_item'>|</li>
            <li>
              <a class='navbar_menu_item' href='../contact.html'>
                CONTACT
              </a>
            </li>
          </ul>
        </section>
      </nav>
    );
  }
}

export default NavBar;
