import React, { useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { loadCats, setBreed, setError, setLoader } from '../../store/actions'
import { ICat, IStateHomePage } from '../../shared/interface'
import Select from '../../components/Select'
import CatCard from '../../components/CatCart'

interface IHomePage {
  cats: ICat[]
  singleBreed: ICat[]
  isLoading: boolean
  setLoader: (props: boolean) => void
  setError: (props: boolean) => void
  loadCats: (props: ICat[]) => void
  setBreed: (props: string) => void
}

const HomePage = ({ cats, singleBreed, isLoading, setLoader, setError, loadCats, setBreed }: IHomePage) => {

  const getAllCats = async () => {
    try {
      setLoader(true)
      const response = await axios({
        method: 'get',
        url: 'https://api.thecatapi.com/v1/breeds',
        headers: {
          'x-api-key': '1490f8d2-ecf5-4850-8fcd-5ddd5495be5f'
        }
      })
      let cats: ICat[] = []
      response.data.map((cat: any) => {
        let data: ICat = {
          id: cat.id,
          name: cat.name,
          description: cat.description,
          origin: cat.origin,
          temperament: cat.temperament,
          image: cat.image
        }
        cats.push(data)
      })
      loadCats(cats)
      setLoader(false)
    } catch {
      setError(true)
    }
  }

  useEffect(() => {
    if (!cats.length) {
      getAllCats()
    }
  }, [])
  return (
    <div>
      <h1>Cat Browser</h1>
      <Select singleBreed={singleBreed} breeds={cats} setBreed={setBreed}/>
      {
        !singleBreed.length ?
          <>
            <h3>No cats available</h3>
            <Button variant="success" size="sm" disabled>Load more</Button>
          </> :
          <>
            <CatCard singleBreed={singleBreed}/>
            {
              isLoading ?
                <Button variant="success"disabled>Loading cats...</Button>
                :
                <Button variant="success">Load more</Button>
            }
          </>
      }
    </div>
  );
};

const mapStateToProps = (state: IStateHomePage) => ({
  cats: state.cat.cats,
  singleBreed: state.cat.singleBreed,
  isLoading: state.cat.isLoading,
  errors: state.cat.errors
})

const mapDispatchToProps = {
  setLoader,
  setError,
  loadCats,
  setBreed
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
