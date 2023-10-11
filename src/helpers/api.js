export const obtenerProductos = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return [];
  }
};
