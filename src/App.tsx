import React, { useState } from 'react'
import Card from './components/Card';
const App = () => {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState(false)
  const Trivia = async () => {

  }
  const checkAnwser = (e: React.MouseEvent<HTMLButtonElement>) => {

  }
  const NextQuestion = () => {

  }
  return (
    <div>
      <button className="start" onClick={Trivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Question ...</p>
      <Card />
      <button className="next" onClick={NextQuestion}>
          Next
      </button>
    </div>
  )
}

export default App
