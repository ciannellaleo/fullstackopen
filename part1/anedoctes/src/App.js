import { useState } from 'react'

const Button = ({ text, handler }) => {
  return (
    <button onClick={handler}>{text}</button>

  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(8))
  let larger = 0;

  const randomAnedocte = () => {
    const newAnedocte = Math.floor(Math.random() * 8)
    setSelected(newAnedocte)
  }

  const handleVote = () => {
    const tmpVotes = [...votes]
    tmpVotes[selected] += 1

    setVotes([...tmpVotes])

  }



  return (
    <div>
      <Button text={"Anedocte"} handler={randomAnedocte} />
      <Button text={"Vote"} handler={handleVote} />
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <h1>
        Anedocte with most votes
      </h1>

      {votes.map(element => {
        if (larger < element.valueOf()) {
          larger = element
        }
        return larger
      })}

      <p>{anecdotes[larger]}</p>
      <p>has {votes[larger]} votes</p>
    </div>
  )

}

export default App