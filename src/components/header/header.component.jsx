import React from "react";
import {connect} from 'react-redux';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {auth} from "../../firebase/firebase.utils";
import logo from '../../assests/taglogo.png';

const Header = ({currentUser}) => (
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
            {
                currentUser ? (
                    <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                ) : (
                    <Link className='option' to='/signin'> SIGN IN</Link>
                ) }
        </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
