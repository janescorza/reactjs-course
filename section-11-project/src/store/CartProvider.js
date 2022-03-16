import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  //state: last state snapshot of the state managed/ action: lauched by me later
  if (action.type === "ADD_ITEM") {
    //Add new item or add to quant if already  present + update total price



    const updatedTotalAmount =
      +state.totalAmount + action.item.price * action.item.amount;
    const currentIndex = state.items.findIndex(
      (cartItem) => cartItem.id === action.item.id
    );
    let updatedItems;
    if (currentIndex !== -1) {
      const existingCartItem = state.items[currentIndex];
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[currentIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount.toFixed(2),
    };
  } else if(action.type === "REMOVE_ITEM") {
    //Delete item
    let updatedItems;
    const currentIndex = state.items.findIndex(
      (cartItem) => cartItem.id === action.id
    );
    const existingCartItem = state.items[currentIndex];
    const currentAmount = existingCartItem.amount;
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    if (currentAmount > 1) {
      const updatedItem = {
        ...existingCartItem,
        amount: currentAmount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[currentIndex] = updatedItem;
    } else {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount.toFixed(2),
    };
  }else{
    return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [cartStateSnapshot, dispacthCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispacthCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispacthCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext = {
    items: cartStateSnapshot.items,
    totalAmount: cartStateSnapshot.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
