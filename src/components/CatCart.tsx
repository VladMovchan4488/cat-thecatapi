import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ICat } from '../shared/interface';

interface ICard {
  singleBreed: ICat[]
}

const CatCard = ({singleBreed}: ICard) => {

  return (
    <div className="card-wrapper">
      {
        singleBreed.map( (breed: ICat, index: number) => (
          <Card className="card" key={index}>
            {breed.image ? <Card.Img className="card-img" variant="top" src={breed.image.url} /> : null}
            <Card.Body>
              <Link to="/cat-page">
                <Button
                  onClick={() => console.log(breed)}
                  variant="primary">
                  View details
                </Button>
              </Link>
            </Card.Body>
          </Card>
        ))
      }
    </div>
  )
}

export default CatCard;