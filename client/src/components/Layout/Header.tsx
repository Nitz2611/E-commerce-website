import React from 'react'

const Header = () => {
  return (
    <section id="header" className="flex align-center">
  <a href="#">
    <img src="img/logo.png" className="logo" alt="logo" />
  </a>
  <div>
    <ul id="navbar" className="flex align-center justify-center">
      <li>
        <a className="active" href="index.html">
          Home
        </a>
      </li>
      <li>
        <a href="shop.html">Shop</a>
      </li>
      <li>
        <a href="blog.html">Blog</a>
      </li>
      <li>
        <a href="about.html">About</a>
      </li>
      <li>
        <a href="contact.html">Contact us</a>
      </li>
      <li id="bag1">
        <a href="cart.html">
          <i className="fa-solid fa-bag-shopping" />
        </a>
      </li>
      <a href="#" id="close">
        {" "}
        <i className="fa-solid fa-xmark" />{" "}
      </a>
    </ul>
  </div>
  <div id="mobile">
    <a href="cart.html">
      <i className="fa-solid fa-bag-shopping" />
    </a>
    <i id="bar" className="fas fa-outdent" />
  </div>
</section>

  )
}

export default Header
