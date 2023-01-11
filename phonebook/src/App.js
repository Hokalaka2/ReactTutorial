import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/person'
import DisplayNumbers from './components/DisplayNumbers'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialEntries => {
        setPersons(initialEntries)
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

      personService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
      
    }
    else{
      const findPerson = persons.find(person => person.name === newName)
      if(window.confirm(`${newName} is already added to phonebook, replace old number?`)) {
        const changedPerson = { ...findPerson, number: newNumber}
        personService
          .update(changedPerson.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== changedPerson.id ? person : returnedPerson))
          })
      }
    }
  }

  const deletePerson = (id) => {
    if(window.confirm(`Are you sure you want to delete ${persons[id]}`)) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(n => n.id !== id))
        })
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

  const personsToShow = newSearch.length > 0
      ? persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))
      : persons

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
      {personsToShow.map(person => <DisplayNumbers 
        key={person.id}
        person={person}
        deletePerson={() => deletePerson(person.id)}
        />)}
      </ul>
    </div>
  )
}

export default App
