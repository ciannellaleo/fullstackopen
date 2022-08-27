import { useState } from 'react'

const Button = ({ text, handler }) => {
  return (
    <button onClick={handler}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const avarage = (good - bad) / total
  const percentage = good * 100 / total

  return (
    <>
      <h1>give feedback</h1>
      <div>
        <Button text={"good"} handler={() => setGood(good + 1)} />
        <Button text={"neutral"} handler={() => setNeutral(neutral + 1)} />
        <Button text={"bad"} handler={() => setBad(bad + 1)} />
      </div>
      <h1>statistics</h1>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {total}</p>
      <p>avarage: {avarage}</p>
      <p>percentage: {percentage}</p>
    </>


  )
}

export default App