import "./header.css"
import React from "react"

let Header = () => {
    return (
        <header >
                <div className="nav">

                    <div className="nav__logo">
                        <a href="index.html">Shaurya</a>
                    </div>

                    <div className="nav__menu">
                        <ul className="nav__list ">
                            <div className="nav__item">
                                <li >
                                    <a href="#about" className="nav__link">
                                        <i className="uil uil-user nav__icon"></i>About
                                    </a>
                                </li>
                            </div>

                            <div className="nav__item">
                                <li >
                                    <a href="#portfolio" className="nav__link">
                                        <i className="uil uil-scenery nav__icon"></i> Projects
                                    </a>
                                </li>
                            </div>
                            <div className="nav__item">
                                <li>
                                    <a href="#contact" className="nav__link">
                                        <i className="uil uil-message nav__icon"></i> Contact
                                    </a>
                                </li>
                            </div>
                        </ul>
                        <i className="uil uil-time nav__close"></i>
                    </div>

                    <div className="nav__toggle">
                        <i className="uil uil-apps"></i>
                    </div>

                </div>
        </header>

    )
}

export default Header