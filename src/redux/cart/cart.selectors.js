import { createSelector } from 'reselect';

// input selector - just returns a piece of the state
const selectCart = (state) => state.cart;

// output selector - it is memoized - won't recalculate same values
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// another output selector
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0
    )
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
