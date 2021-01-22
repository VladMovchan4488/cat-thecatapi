import React from 'react'
import { Form } from 'react-bootstrap'
import { ICat } from '../shared/interface'

interface ISelect {
  breeds: any[]
  setBreed: (props: string) => void
  singleBreed: ICat[]
}
const Select = ({breeds, singleBreed, setBreed}: ISelect) => {
  const handleChange = (event: any) => {
    const breed = event.target.value
    setBreed(breed)
  }
  const initialValue = singleBreed[0] ? singleBreed[0].name : ''

  return (
    <Form.Group className="chose-cat-breed">
      <Form.Label>Breed</Form.Label>
      <Form.Control as="select" onChange={handleChange} value={initialValue}>
        <option value=''>Choose option...</option>
        {
          breeds.map(breed => (
            <option value={breed.name} key={breed.id}>{breed.name}</option>
          ))
        }
      </Form.Control>
    </Form.Group>
  )
}

export default Select