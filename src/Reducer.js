export const initialState = {
  basket: [],
};

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_ITEM: "REMOVE_iTEM",
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => amount + item.price, 0);
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_iTEM":
      //encuentra  el indice del item a eliminar pasdo por parametro
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      //hace  una copia de la lista sin el elemento en cuestion y lo devuelve
      let newBasket = [...state.basket];
      //si  encuentra el item elimina este de la nueva lista
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        return state;
      }
      return {
        //retorna  el estado actual mas la nueva lista sin el item
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
