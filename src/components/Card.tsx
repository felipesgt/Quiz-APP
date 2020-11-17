import React from 'react'

type Props = {
  question: string;
  answers: string [];
  callback: any;
  userAnswer: string;
  questionNr: number;
  totalQuestion: number;
}

const Card: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestion
}) => {
  return (
    <div> 
      <p className="number">
        Question: {questionNr} / {totalQuestion}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question}} />
      <div>
    {answers.map(answers => (
      <div>
        <button disabled={userAnswer} onClick={callback}>
          <span dangerouslySetInnerHTML={{ __html: answers}}></span>
        </button>
      </div>
    ) )}
      </div>
    </div>
  )
}

export default Card
