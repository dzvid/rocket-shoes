import produce from 'immer';

// Cart reducer, returns the cart's initial state (empty initial state in this case)
export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draftState => {
        const { product } = action;

        draftState.push(product);
      });

    case '@cart/REMOVE':
      return produce(state, draftState => {
        const productIndex = draftState.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draftState.splice(productIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draftState => {
        const productIndex = draftState.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draftState[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
