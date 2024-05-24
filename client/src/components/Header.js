import React from 'react'

const Header = () => {
    return (
        <section id="header" class="flex align-center">
            <a href="#">
                <img src="img/logo.png" class="logo" alt="logo" />
            </a>

            <div>
                <ul id="navbar" class="flex align-center justify-center">
                    <li><a class="active" href="index.html">Home</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact us</a></li>
                    <li id="bag1"><a href="cart.html"><i class="fa-solid fa-bag-shopping"></i></a></li>

                    <a href="#" id="close"> <i class="fa-solid fa-xmark"></i> </a>
                </ul>
            </div>
            <div id="mobile">
                <a href="cart.html"><i class="fa-solid fa-bag-shopping"></i></a>
                <i id="bar" class="fas fa-outdent"></i>
            </div>
        </section>
    )
}

export default Header
