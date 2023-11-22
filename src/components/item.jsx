import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';

export const Item = ({ item }) => {
  return (
    <Card style={{ width: '17rem'}}>
      <Card.Img variant="top" src={item.urlPicture} />
      <Card.Body className='bodyCard'>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <div className='button-container'>
          <Link to={`/item/${item.id}`}>
            <Button variant="primary" id='buttonMorInformation'><p id='moreInformation'>Mas información</p></Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  )
}
