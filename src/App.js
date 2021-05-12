import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const sum = good + neutral + bad

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => handleClickGood()}>good</button>
      <button onClick={() => handleClickNeutral()}>neutral</button>
      <button onClick={() => handleClickBad()}>bad</button>
      <Statistics />
    </div>
  )

  function Statistics() {
    const initial =
      sum === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{sum}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{(good - bad) / sum}</td>
          </tr>
          <tr>
            <td>tdositive</td>
            <td>{(good / sum) * 100}%</td>
          </tr>
        </table>
      )

    return (
      <>
        <h2>statistic</h2>
        {initial}
      </>
    )
  }

  function handleClickGood() {
    setGood(good + 1)
  }
  function handleClickNeutral() {
    setNeutral(neutral + 1)
  }
  function handleClickBad() {
    setBad(bad + 1)
  }
}

export default App
