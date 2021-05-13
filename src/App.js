import React, { useEffect, useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0])
  const mostVotes = votes.indexOf(Math.max(...votes))
  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]} <br />
      <p>has {votes[selected]} votes</p>
      <button onClick={() => handleVote()}>vote</button>
      <button onClick={() => handleClick()}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      {anecdotes[mostVotes]}
      <p>has {votes[mostVotes]} votes</p>
    </div>
  )

  function handleClick() {
    const length = anecdotes.length - 1
    const random = Math.floor(Math.random() * length)
    setSelected(random)
  }

  function handleVote() {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
}

export default App
