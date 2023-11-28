import { Typography } from "@mui/material";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { products } from "../data/products";


export const ItemListcontainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(products);
          }, 2000);
        });

        if (id) {
          const filtered = response.filter((item) => item.category === id);
          setItems(filtered);
        } else {
          setItems(response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Container className="mt-4">
      <Typography variant="h1">Motos nuevas</Typography>
      <ItemList items={items} />
    </Container>
  )
};
