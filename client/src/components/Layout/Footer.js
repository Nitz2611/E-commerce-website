import React from 'react'

const Footer = () => {
    return (
        <div>
            <>
                <footer className="section-p1 flex">
                    <div className="col">
                        <img className="logo" src="img/logo.png" alt="" />
                        <h4>Contact</h4>
                        <p>
                            <strong>Address:</strong> 123 church road,street 54, San Francisco
                        </p>
                        <p>
                            <strong>Phone:</strong> +01 2345 678/(521)01 2345 6789
                        </p>
                        <p>
                            <strong>Hours:</strong> 10:00-18:00. Mon-Sat
                        </p>
                        <div className="follow">
                            <h4>Follow us</h4>
                            <div className="icon">
                                <i className="fab fa-facebook-f" />
                                <i className="fab fa-twitter" />
                                <i className="fab fa-instagram" />
                                <i className="fa-brands fa-pinterest" />
                                <i className="fab fa-youtube" />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h4>About</h4>
                        <a href="/">About Us</a>
                        <a href="/">Delivery Information</a>
                        <a href="/">Privacy Policy</a>
                        <a href="/">Terms &amp; Conditions</a>
                        <a href="/">Cantact Us</a>
                    </div>
                    <div className="col">
                        <h4>My Account</h4>
                        <a href="/">Sign in</a>
                        <a href="/">View cart</a>
                        <a href="/">My Wishlist</a>
                        <a href="/">Track my order</a>
                        <a href="/">Help</a>
                    </div>
                    <div className="col install">
                        <h4>Install App</h4>
                        <p>From App Store or Google Play</p>
                        <div className="row">
                            <img src="/img/pay/app.jpg" alt="" />
                            <img src="/img/pay/play.jpg" alt="" />
                        </div>
                        <p>Secure Payments and Gateways</p>
                        <img src="/img/pay/pay.png" alt="" />
                    </div>
                </footer>
                <div className="copyright">
                    <p>© 2023, Nitish Sharma - Personal project</p>
                </div>
            </>

        </div>
    )
}

export default Footer
