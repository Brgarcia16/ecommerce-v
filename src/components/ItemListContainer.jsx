import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import { ItemList } from "./ItemList";
import { products } from "../data/products";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);


  const { id } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    })
    promise.then((response) => {
      if (id) {
        const filters = response.filter((item) => item.category === id);
        setItems(filters);
      } else {
        setItems(response);
      }
    }).finally(() => setLoading(false))
  }, [id])

  return (
    <Container className='mt-4'>
      <div>
        <h1>Lista productos</h1>
        <ItemList items={items}></ItemList>
      </div>
    </Container>
  );
};