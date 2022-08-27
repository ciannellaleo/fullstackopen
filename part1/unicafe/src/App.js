import { useState } from 'react'


const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>statistics</h1>
        <p>good: {props.good}</p>
        <p>neutral: {props.neutral}</p>
        <p>bad: {props.bad}</p>
        <p>all: {props.total}</p>
        <p>avarage: {props.avarage}</p>
        <p>percentage: {props.percentage}</p>
      </div>
    )
  }


}
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
        <Statistics good={good} neutral={neutral} bad={bad} total={total} avarage={avarage} percentage={percentage} />
      </div>

    </>


  )
}

export default App