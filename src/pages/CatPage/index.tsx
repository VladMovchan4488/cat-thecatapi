import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { ICat, IStateCatPage } from '../../shared/interface'
import { connect } from 'react-redux'
import { Card, Button } from 'react-bootstrap'

interface CatPage {
  singleBreed: ICat[]
}

const CatPage = ({ singleBreed }: CatPage) => {
  return (
    <div className="cat-page">
      {
        singleBreed.length ?
          singleBreed.map((breed: ICat, index: number) => (
            <Card key={index}>
              <Card.Header>
                <Link to="/">
                  <Button variant="primary">Back</Button>
                </Link>
              </Card.Header>
              <Card.Body>
                <Card.Img src={breed.image.url} />
                <Card.Title>
                  {breed.name}
                </Card.Title>
                <Card.Text className="cat-description">
                  <strong>Origin:{breed.origin}</strong>
                  <strong>{breed.temperament}</strong>
                  <span>{breed.description}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          ))
          :
          <Redirect to='/'/>
      }
    </div>
  );
};

const mapStateToProps = (state: IStateCatPage) => ({
  singleBreed: state.cat.singleBreed,
})

export default connect(mapStateToProps)(CatPage);
