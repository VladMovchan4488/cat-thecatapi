import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ICat } from '../shared/interface';

interface ICard {
  chooseBreed: ICat[]
  setSingleBreed: (props: ICat[]) => void
}

const CatCard = ({ chooseBreed, setSingleBreed }: ICard) => {

  return (
    <div style={{ textAlign: 'center', marginBottom: 15 }} className="card-wrapper">
      {
        chooseBreed.map((breed: ICat, index: number) => (
          <Card key={index}>
            {breed.image ? <Card.Img className="card-img" variant="top" src={breed.image.url}/> : null}
            <Card.Body>
              <Link to="/cat-page">
                <Button
                  onClick={() => setSingleBreed([breed])}
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