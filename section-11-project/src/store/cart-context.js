import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {this.items = [item,...this.items]},
    removeItem: (item) => {}
}
);

export default CartContext;