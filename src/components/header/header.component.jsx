import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {auth} from "../../firebase/firebase.utils";
import logo from '../../assests/taglogo.png';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";

const Header = ({currentUser, hidden}) => (
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
                <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
