import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';

import { useParams } from "react-router";
import { ItemList } from "./itemList";
import { Item } from "./item";
import { products } from "../data/products";

const categorias = [...new Set(products.map((item) => item.category))];

export const ItemListContainer = props => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState([true])

    const { id } = useParams();

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    const handleCategoriaChange = (event) => {
        setCategoriaSeleccionada(event.target.value);
    };

    return (
        <Container className='mt-4'>
            <div>
                <h1>Productos</h1>
                <ItemList items={items} />
                <select onChange={handleCategoriaChange} value={categoriaSeleccionada || ''}>
                    <option value="">Todas las categorías</option>
                    {categorias.map((categoria) => (
                        <option key={categoria} value={categoria}>
                            {categoria}
                        </option>
                    ))}
                </select>
                <ul>
                    {products.filter((item) =>
                        categoriaSeleccionada === null ||
                        item.category === categoriaSeleccionada
                    ).map((item) => (
                        <Item key={item.id} item={item} />
                    ))}
                </ul>
            </div>
        </Container>
    );
};