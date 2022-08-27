import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}: {value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        <h1>statistics</h1>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={props.good} />
            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="bad" value={props.bad} />
            <StatisticLine text="total" value={props.total} />
            <StatisticLine text="avarage" value={props.avarage} />
            <StatisticLine text="percentage" value={props.percentage} />
          </tbody>
        </table>
      </div >
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