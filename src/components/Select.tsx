import React from 'react'
import { Form } from 'react-bootstrap'
import { ICat } from '../shared/interface'

interface ISelect {
  breeds: any[]
  chooseBreed: ICat[]
  isLoading: boolean
  getChooseBreed: (props: string, limit: number) => void
  resetLimit: () => void
}
const Select = ({breeds, chooseBreed, isLoading, getChooseBreed, resetLimit}: ISelect) => {
  const handleChange = (event: any) => {
    const breedId = event.target.value
    resetLimit()
    getChooseBreed(breedId, 3)
  }

  const initialValue = chooseBreed[0] ? chooseBreed[0].id : ''
  return (
    <Form.Group className="chose-cat-breed">
      <Form.Label>Breed</Form.Label>
      <Form.Control as="select" onChange={handleChange} value={initialValue} disabled={isLoading}>
        <option value=''>Select Breed</option>
        {
          breeds.map(breed => (
            <option value={breed.id} key={breed.id}>{breed.name}</option>
          ))
        }
      </Form.Control>
    </Form.Group>
  )
}

export default Select