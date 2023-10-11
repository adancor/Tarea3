import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CardProducto = ({ producto }) => {
  const { agregarProducto } = useContext(CartContext);
  const {  title, image,   } = producto;

  const handleClick = () => {
    agregarProducto(producto);
  };

  return (
    <div className="border p-4 m-4">
     <h2 className="text-lg font-semibold">{producto.title}</h2>
     <p className="text-2xl font-bold text-green-600">S/.{producto.price}</p>
      <img src={image} alt={title} className="w-[234px] h-[234px] mx-auto" />
      <p>{producto.category}</p>
      <button onClick={handleClick}className="bg-blue-500 text-white mt-2 px-4 py-2 rounded hover:bg-blue-600">Agregar Producto</button>    
      </div>
  );
};

export default CardProducto;
