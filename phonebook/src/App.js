import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    console.log("Effect")
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log("Promise fulfilled")
        setPersons(response.data)
      })
  }, [])
  const addName = (event) => {
    event.preventDefault()
    if(!persons.find(person => person.name === newName)){
      const nameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
    else{
      alert(`${newName} is already added to phonebook`)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newSearch} onChange = {handleSearchChange}/>
      
      <h3>Add New</h3>
      <PersonForm 
        formSubmit = {addName} 
        nameValue = {newName} 
        handleNameChange={handleNameChange} 
        numberValue={newNumber} 
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <ul>
        <Persons newSearch={newSearch} persons={persons}/>
      </ul>
    </div>
  )
}

export default App
