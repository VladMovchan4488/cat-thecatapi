import React from 'react'
import { Form } from 'react-bootstrap'

interface ISelect {
  breeds: any[]
  setBreed: (props: string) => void
}
const Select = ({breeds, setBreed}: ISelect) => {
  const handleChange = (event: any) => {
    const breed = event.target.value
    console.log(breed)
    setBreed(breed)
  }

  return (
    <Form.Group className="chose-cat-breed">
      <Form.Label>Breed</Form.Label>
      <Form.Control as="select" onChange={handleChange}>
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