import { products } from "../data/products";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ItemsDetailsContainer = () => {
  const [item, setItem] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulación de una solicitud asíncrona con un retardo de 2 segundos
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(products);
          }, 2000);
        });

        // Encuentra el elemento en el array de productos con el ID correspondiente
        const filteredItem = response.find((item) => item.id == id);

        // Establece el estado del elemento encontrado
        setItem(filteredItem);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Llama a la función fetchData cuando cambia el ID en la URL
    fetchData();
  }, [id]);

  // Muestra un mensaje de carga si el elemento aún no se ha cargado
  if (!item) {
    return <p>Loading...</p>;
  }

  // Renderiza la información del elemento
  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.image} width={200} alt={item.title} />
      <p>{item.description}</p>
    </div>
  );
};
