import produce from 'immer';

// Cart reducer, returns the cart's initial state (empty initial state in this case)
export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, draftState => {
        const productIndex = draftState.findIndex(
          p => p.id === action.product.id
        );

        if (productIndex >= 0) {
          draftState[productIndex].amount += 1;
        } else {
          draftState.push({
            ...action.product,
            amount: 1,
          });
        }
      });
    default:
      return state;
  }
}
