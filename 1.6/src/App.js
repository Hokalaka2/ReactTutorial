import { useState } from 'react'

const Button = (props) => (
    <button onClick={props.click}>{props.text}</button>
)

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}:</td>
    <td>{props.value}</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => {
  let all = good + bad + neutral
  let average = good + (-1*bad)
  let positive = good / all
  if(all > 0){
    return (
      <div>
        <table>
          <thead>
          <tr>
            <th>Statistics</th>
          </tr>
          </thead>
          <tbody>
          <StatisticLine text="Good" value={good}/>
          <StatisticLine text="Neutral" value={neutral}/>
          <StatisticLine text="Bad" value={bad}/>
          <StatisticLine text="All" value={all}/>
          <StatisticLine text="Average" value={average}/>
          <StatisticLine text="Positive" value={positive}/>
          </tbody>
        </table>
      </div>
    )
  }else{
    return (
      <div>
        <p>No Feedback Given</p>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good+1)
  }
  const handleNeutral = () => {
    setNeutral(neutral+1)
  }
  const handleBad = () => {
    setBad(bad+1)
  }

  return (
    <div>
      <h1>Give FeedBack</h1>
      <Button text="Good" click={handleGood}/>
      <Button text="Neutral" click={handleNeutral}/>
      <Button text="Bad" click={handleBad}/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
