import React from "react";
import {connect} from 'react-redux';
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {withRouter} from 'react-router-dom';
import './cart-dropdown.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {createStructuredSelector} from "reselect";

const CartDropdown = ({cartItems, history}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? (
                cartItems.map(cartItem =>(
                <CartItem key={cartItem.id} item={cartItem}/>
                ))
                )  : (
                    <span className='empty-message'> Your Cart is Empty </span>
                )}
        </div>
        <CustomButton onClick={() => history.push('/checkout')}>CHECKOUT</CustomButton>
    </div>
);
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
