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
    const handleCategoriaChange = (categoria) => {
        setCategoriaSeleccionada(categoria);
    };


    return (
        <Container className='mt-4 custom-container'>
            <div className="content-wrapper">
                <div className="categories-list">
                    <p id="category_subtitle">Categorías</p>
                    <ul id="ul_class">
                        {categorias.map((categoria) => (
                            <li key={categoria}>
                                <button className='buttonCategory' onClick={() => handleCategoriaChange(categoria)}>
                                    {categoria}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="main-content">
                    <ItemList items={items} />
                    <ul className="cardContainer">
                        {products.filter((item) =>
                            categoriaSeleccionada === null ||
                            item.category === categoriaSeleccionada
                        ).map((item) => (
                            <Item key={item.id} item={item} />
                        ))}
                    </ul>
                </div>
            </div>
        </Container>
    );
};