import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IncrementadorCantidad } from './incrementador'
import React, { useState } from 'react';
import { MostrarToast } from './toast';


export const Item = ({ item }) => {
  const [cantidad, setCantidad] = useState(0);

  const [mostrar, setMostrar] = useState(false);

  const handleClick = () => {
    setMostrar(true); // Al hacer clic, mostramos el toast
  };
  return (
    <Card style={{ width: '15rem' }}>
      <div className='image-container'>
        <Card.Img variant="top" src={item.urlPicture} className="card-image" />
      </div>
      <br className='line'/>
      <Card.Body className='bodyCard'>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <div className='button-container'>
          <div className="buttons-group">
            <Link to={`/item/${item.id}`}>
              <Button variant="primary" id='buttonMorInformation'><p id='moreInformation'>Mas información</p></Button>
            </Link>
            <Button id='buttonAddCart' onClick={handleClick}><p id='moreInformation'>Agregar al carrito</p> </Button>
          </div>
          <IncrementadorCantidad cantidad={cantidad} setCantidad={setCantidad} />
        </div>
        {mostrar && <MostrarToast onClose={() => setMostrar(false)} cantidad={cantidad} />} {}
      </Card.Body>
    </Card>
  )
}
