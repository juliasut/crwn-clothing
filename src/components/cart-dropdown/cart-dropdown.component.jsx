import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
      cartItems.length ? (
      cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
      )
    : (
      <span className="empty-message">Your cart is empty</span>
    )}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

// redux's mapStateToProps has a shallow equality check for every value in the object; it won't replace values if they pass a shallow equality check which means it won't needlessly re-render, but if we have transformation logic it's still valuable to memoize it with a selector to save us running duplicate logic to get the same output.
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
