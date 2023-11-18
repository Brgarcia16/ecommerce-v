import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { products } from "../data/products";


export const ItemDetailsContainer = () => {
    const [item, setItem] = useState(null)

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
        return (
            <div class="loader-overlay" id="loader-overlay">
                <div class="loader">
                    <p class="loading-text">Cargando....</p>
                </div>
            </div>
        )

    }


    return (
        <div className="mt-5">
            <h1>{item.title}</h1>
            <img src={item.urlPicture} width={200} />
            <p>{item.description}</p>
        </div>
    )
}