import { useState } from 'react'

const NewAnecdote = (props) => (
  <button onClick= {props.click}> New Random Quote </button>
)

const Display = (props) => <div>{props.anecdote}</div>

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
  const [points, setPoints] = useState([0,0,0,0,0,0,0])

  const randomSelected = () => {
    return Math.floor(Math.random() * 7)
  }

  const setToSelected = newSelected => {
    setSelected(newSelected)
  }

  const updatePoints = selected => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    console.log(points)
  }

  const largestVoteAnec = () => {
    var max = points[0]
    var maxIndex = 0

    for(var i = 1; i < points.length; i++){
      if(points[i] > max){
        max = points[i]
        maxIndex = i
      }
    }

    return maxIndex
  }

  return (
    <div>
      <Display anecdote={anecdotes[selected]} />
      <button onClick={()=>updatePoints(selected)}>Vote</button>
      <NewAnecdote click={() => setToSelected(randomSelected)}/>
      <h3>Most Voted on Anecdote with {points[largestVoteAnec()]}</h3>
      <Display anecdote={anecdotes[largestVoteAnec()]} />
    </div>
  )
}

export default App
