import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )

  function Header({ course }) {
    return <h1>{course}</h1>
  }

  function Content({ part1, part2, part3 }) {
    return (
      <>
        {' '}
        <Part name={part1.name} exercises={part1.exercises} />
        <Part name={part2.name} exercises={part2.exercises} />
        <Part name={part3.name} exercises={part3.exercises} />
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

  function Total({ part1, part2, part3 }) {
    return (
      <p>
        Number of exercises{' '}
        {part1.exercises + part2.exercises + part3.exercises}
      </p>
    )
  }
}

export default App
