import React from "react";
import './header.styles.scss';
import {Link} from 'react-router-dom';
import logo from '../../assests/taglogo.png';

const Header = () => (
    <div className='header'>
    <Link className='logo-container' to="/">
        <img src={logo} alt="My Logo" className='logo' />
    </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
        </div>
    </div>
)

export default Header;
