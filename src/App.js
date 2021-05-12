import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )

  function Header({ course }) {
    return <h1>{course}</h1>
  }

  function Content({ parts }) {
    return (
      <>
        {' '}
        <Part name={parts[0].name} exercises={parts[0].exercises} />
        <Part name={parts[1].name} exercises={parts[1].exercises} />
        <Part name={parts[2].name} exercises={parts[2].exercises} />
      </>
    )
  }

  function Part({ name, exercises }) {
    return (
      <p>
        {name} {exercises}
      </p>
    )
  }

  function Total({ parts }) {
    console.log(parts)
    return (
      <p>
        Number of exercises{' '}
        {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
    )
  }
}

export default App
