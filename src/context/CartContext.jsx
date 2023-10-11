import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarProducto = (productoId) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== productoId);
    setCarrito(nuevoCarrito);
  };

  const calcularPrecioTotal = () => {
    return carrito.reduce((total, producto) => total + producto.price, 0);
  };

  return (
    <CartContext.Provider value={{ carrito, agregarProducto, eliminarProducto, calcularPrecioTotal }}>
      {children}
    </CartContext.Provider>
  );
};
