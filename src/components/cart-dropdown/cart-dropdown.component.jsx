import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden} from '../../redux/cart/cart.actions.js';
// to have access to history
import { withRouter } from 'react-router-dom';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    {/* route to checkout page */}
    <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
    }}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

// redux's mapStateToProps has a shallow equality check for every value in the object; it won't replace values if they pass a shallow equality check which means it won't needlessly re-render, but if we have transformation logic it's still valuable to memoize it with a selector to save us running duplicate logic to get the same output.
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// connect passes actions into our components as a prop if the 2nd argument isn't passed (f.i. dispatch) - no need for additional mapStateToProps
export default withRouter(connect(mapStateToProps)(CartDropdown));
