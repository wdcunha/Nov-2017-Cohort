import React, {Component} from 'react';// When you're not export a default from a module
import {QuestionForm} from './QuestionForm';
import {Field} from './Field';
import questions from '../data/questions';

class QuestionIndexPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      questions: questions
    };

    // this.deleteQuestion = (..args) => this.deleteQuestion(...args);
    // When using a method as a callback on an event listener
    // prop (example: onClick={this.deleteQuestion}),
    // we must bind this to it otherwise we won't have access
    // to any method on `this` such `setState`.
    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
  }

  deleteQuestion (questionId) {
    /*
    Another way to keep track of which question delete
    besides using a custom html attribute is make use
    of a closure. Instead, our `deleteQuestion` function
    will return a function itself. When deleteQuestion
    is called with a `questionId`, this argument will be
    saved in the closure that will be usable
    by the returned function.*/
    // const {currentTarget} = event;
    // // console.log(currentTarget);
    // // const questionId = currentTarget.getAttribute('data-id');
    // const questionId = parseInt(currentTarget.getAttribute('data-id'));
    return () => {

      const {questions} = this.state;
      // this.state = this.state.questions.pop() BAD!

      // Everytime you want to change the state, use the
      // this.setState() method. Unlike directly mutating the
      // this.state, this will tell React that the DOM may need
      // to change.
      this.setState({
        // questions: questions.slice(1)
        questions: questions
          .filter(question => question.id !== questionId)
      });
    }
  }


  addQuestion (newQuestion) {
    const {questions} = this.state;
    // ð hack because we don't have a author
    newQuestion.author = {};
    this.setState({
      questions: [
        newQuestion,
        ...questions
      ]
    })
  }

  render () {
    return (
      <main
        className="QuestionIndexPage"
        style={{
          padding: '0 20px',
        }}
      >
        <h2>Questions</h2>
        <QuestionForm
          onSubmit={this.addQuestion}
        />
        <ul
          style={{paddingLeft: '30px'}}
        >
          {
            this.state.questions.map(question => (
              <li
                key={question.id}
                style={{padding: '30px'}}
              >
                <a href="">{question.title}</a>
                <Field name="Author" value={question.author.full_name} />
                <button
                onClick={this.deleteQuestion(question.id)}
                >Delete</button>
              </li>
            ))
            /* this.deleteQuestion is not the callback that
            handles the onClick event. Rather, the function that it returns
            will be the event handler. Everytime it gets called for
            each <li... created a new question.id will saved in the
            closure.
            */
          }
        </ul>
      </main>
    );
  }
}

export {QuestionIndexPage};
