import { useState } from 'react'

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
      <p>filter shown with
        <input
          value={filter}
          onChange={handleSearchField}
        />
      </p>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {notesToShow.map((person, i) => <p key={i}>{person.name} {person.number}</p>)}
      </div>
    </div>
  )
}

export default App