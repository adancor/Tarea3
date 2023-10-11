import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Carrito = () => {
  const { carrito, eliminarProducto, calcularPrecioTotal } = useContext(CartContext);

  return (
    <div className="border p-4 m-4">
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map((producto) => (
          <li key={producto.id}>
            {producto.title} - S/.{producto.price}
            
            <button className="bg-red-500 text-white mt-2 px-4 py-2 rounded hover:bg-red-300" onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>Total: S/.{calcularPrecioTotal()}</p>
    </div>
  );
};

export default Carrito;
