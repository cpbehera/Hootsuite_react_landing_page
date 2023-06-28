import React from 'react'
import './Nav.css'
import logo from '../../Image/logo.png';

function Nav() {
    return (
        <header>
            <nav>
                <div className='menu'>
                    <div className="logo">
                        <img src={logo} alt="logo" width='100px' />
                    </div>
                    <ul>
                        <li><a href="#">Platform</a></li>
                        <li><a href="#">Plans</a></li>
                        <li><a href="#">Enterprise</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">Education</a></li>
                    </ul>
                </div>
                <div className='account'>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Log In</a></li>
                        <li><a href="#">
                            <button>Sign Up</button>
                        </a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Nav
