import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { loadCats, setBreed, setError, setLoader, setLoadMore, setSingleBreed } from '../../store/actions'
import { ICat, IImage, IStateHomePage } from '../../shared/interface'
import Select from '../../components/Select'
import CatCard from '../../components/CatCart'

interface IHomePage {
  cats: ICat[]
  chooseBreed: ICat[]
  isLoading: boolean
  setLoader: (props: boolean) => void
  setError: (props: boolean) => void
  loadCats: (props: ICat[]) => void
  setBreed: (props: ICat[]) => void
  loadMore: boolean
  setLoadMore: (props: boolean) => void
  setSingleBreed: (props: ICat[]) => void
}

const HomePage = ({ cats, chooseBreed, isLoading, setLoader, setError, loadCats, setBreed, setSingleBreed, loadMore, setLoadMore }: IHomePage) => {

  const [limit, setLimit] = useState(3)

  const getAllCats = useCallback(async () => {
    try {
      setLoader(true)
      const response = await axios({
        method: 'get',
        url: 'https://api.thecatapi.com/v1/breeds',
        headers: {
          'x-api-key': '1490f8d2-ecf5-4850-8fcd-5ddd5495be5f'
        }
      })
      let cats: ICat[] = response.data.map((cat: any) => {
        let data: ICat = {
          id: cat.id,
          name: cat.name,
          description: cat.description,
          origin: cat.origin,
          temperament: cat.temperament,
          image: cat.image
        }

        return data
      })
      loadCats(cats)
      setLoader(false)
    } catch {
      setError(true)
    }
  }, [loadCats, setLoader, setError])

  const getChooseBreed = async (breedId: string, limit: number) => {
    try {
      setLoader(true)
      const response = await axios({
        method: 'get',
        url: `https://api.thecatapi.com/v1/images/search?limit=${limit}&size=full&breed_id=${breedId}`,
        headers: {
          'x-api-key': '1490f8d2-ecf5-4850-8fcd-5ddd5495be5f'
        }
      })
      const breed: ICat[] = response.data.map((cat: any) => {
        const image: IImage = {
          id: cat.id,
          url: cat.url,
          width: cat.width,
          height: cat.height
        }

        const data: ICat = {
          id: cat.breeds[0].id,
          name: cat.breeds[0].name,
          description: cat.breeds[0].description,
          origin: cat.breeds[0].origin,
          temperament: cat.breeds[0].temperament,
          image
        }
        return data
      })
      if (chooseBreed.length === breed.length) {
        setLoadMore(false)
      }
      setBreed(breed)
      setLoader(false)
    } catch {
      setError(true)
    }
  }

  const handleLoadMore = () => {
    setLimit(prev => prev + 3)
    getChooseBreed(chooseBreed[0].id, limit + 3)
  }

  const resetLimit = () => {
    setLimit(3)
    setLoadMore(true)
  }

  useEffect(() => {
    if (!cats.length) {
      getAllCats()
    }
  }, [cats.length, getAllCats])

  return (
    <div>
      <h1>Cat Browser</h1>
      <Select getChooseBreed={getChooseBreed} isLoading={isLoading} chooseBreed={chooseBreed} breeds={cats}
              resetLimit={resetLimit}/>
      {
        !chooseBreed.length ?
          <>
            <h3>No cats available</h3>

          </> :
          <>
            <CatCard setSingleBreed={setSingleBreed} chooseBreed={chooseBreed}/>
          </>
      }
      {
        isLoading ?
          <Button variant="success" disabled>Loading cats...</Button>
          :
          loadMore &&
          <Button variant="success" onClick={handleLoadMore} disabled={!chooseBreed.length}>Load more</Button>
      }
    </div>
  );
};

const mapStateToProps = (state: IStateHomePage) => ({
  cats: state.cat.cats,
  chooseBreed: state.cat.chooseBreed,
  isLoading: state.cat.isLoading,
  errors: state.cat.errors,
  loadMore: state.cat.loadMore
})

const mapDispatchToProps = {
  setLoader,
  setError,
  loadCats,
  setBreed,
  setSingleBreed,
  setLoadMore
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
