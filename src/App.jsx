import React, { useEffect, useState } from 'react';
import { obtenerProductos } from './helpers/api';
import CardProducto from './components/CardProducto';
import Carrito from './components/Carrito';
import { CartProvider } from './context/CartContext';

 

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos().then((data) => setProductos(data));
  }, []);

  return (
    <> 
  <CartProvider>
      <div className="App">
        <h1 className="text-lg font-semibold">COTTON STORE</h1>
        <div className="grid grid-cols-2">
          {productos.map((producto) => (
            <CardProducto key={producto.id} producto={producto} />
          ))}
        </div>
        <Carrito />
      </div>
    </CartProvider>
   
    </>
  );
}

export default App;
