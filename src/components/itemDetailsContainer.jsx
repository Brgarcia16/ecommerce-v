import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemsCounter } from './ItemsCounter'
import Button from 'react-bootstrap/Button';

import { products } from "../data/products";
export const ItemDetailsContainer = () => {
    const [item, setItem] = useState(null)
    const [cantidad, setCantidad] = useState(0);

    const { id } = useParams();

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        });
        promise.then((response) => {
            const filters = response.find(item => item.id == id)
            setItem(filters)
        })
    }, [id]);

    if (!item) {
        return <>Cargando......</>
    }
    return (
        <div className="mt-5">
            <h1>{item.title}</h1>
            <img src={item.urlPicture} width={200} />
            <p>{item.description}</p>
            <ItemsCounter cantidad={cantidad} setCantidad={setCantidad} />
            <Button id='buttonAddCart' onClick={() => alert("Se agregaron una cantidad de " + { cantidad }.cantidad + "")}><p id='moreInformation'>Agregar carrito</p></Button>
        </div>
    )
}