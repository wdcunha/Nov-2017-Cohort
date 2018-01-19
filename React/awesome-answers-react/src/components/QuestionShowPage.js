import React from 'react';
// When you're not export a default from a module
// (e.g. export {QuestionDetails, AnswerDetails}),
// you must braces after `import` to choose the values
// that you are import from the module.
import {QuestionDetails} from './QuestionDetails';
import {AnswerDetails} from './AnswerDetails';
import {AnswerList} from './AnswerList';
import question from '../data/question';

function QuestionShowPage() {
  const {answers = []} = question;

  // To pass props to React elements, set them with
  // "HTML attributes". Each attribute will as a property
  // of the `props` object.

  // When passing props in JSX, any value that
  // is a non-string (e.g. numbers, objects, arrays, functions, etc)
  // must be put inside {}.
  return (
    <main
      className="QuestionShowPage"
      style={{
        padding: '0 20px'
      }}
      >
      <QuestionDetails {...question} />
      {/*<QuestionDetails
        title="What is your favourite colour?"
        body="Red, magenta, blue, indigo, purple, etc."
        created_at="2017-01-01"
        updated_at="2017-01-01"
        view_count={901}
        author={{full_name: "Jon Snow"}}
      />*/}
      <h1>Answers</h1>
      {/*<AnswerDetails
      title="What is your favourite colour?"
      body="What kind of idiot picks a password no one can guess?"
      author={{full_name: "Moses Bogishich"}}
      created_at="1 day ago"
      />*/}
      <AnswerList answers={answers} />
    </main>
  )
}



export {QuestionShowPage};
