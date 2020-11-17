import React, { useState } from 'react'
import { api } from './services/api';

import Card from './components/Card';
const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnwsers, setUserAnwsers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

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
     {/* <Card questionNr={number + 1} 
      totalQuestion={TOTAL_QUESTIONS} 
      question={questions[number].question}
      answers={questions[number].anwsers}
      userAnswer={userAnwsers ? userAnwsers[number] : undefined }
      callback={checkAnwser}
  />*/}
      <button className="next" onClick={NextQuestion}>
          Next
      </button>
    </div>
  )
}

export default App
