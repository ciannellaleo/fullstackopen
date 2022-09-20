import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '21231' },
    { name: 'Ava Lovelace', number: '3232'},
    { name: 'Jimmy Page', number: '9808' },
    { name: 'Harrison Ford', number: '04572' }

  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const notesToShow = filter === ''
    ? persons 
    : persons.filter(person => person.name.includes(filter))


  const addName = (event) => {
    event.preventDefault()
    console.log(filter)
    const newObject = {
      name: newName,
      number: newNumber,
    }

    if (persons.length !== 0) {
      persons.map(person => {
        if (person.name === newName) {
          alert(`${newName} is already added to phonebook`)
        }
        else
          setPersons(persons.concat(newObject))
      })
    }
    else
      setPersons(persons.concat(newObject))

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchField = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handler={handleSearchField}/>
      <h2>add a new</h2>
      <PersonForm formFunction={addName} name={newName} handlerName={handleNameChange} number={newNumber} handlerNumber={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons notesToShow={notesToShow}/>
    </div>
  )
}

export default App