import React, { Component } from 'react';
import './App.css';

const questions = [
  {
    question: 'What is React?',
    options: ['A JavaScript framework', ' A front-end JavaScript library', 'A server-side framework', 'A database management system'],
    correctAnswer: ' A front-end JavaScript library',
  },
  {
    question: 'What does JSX stand for in React?',
    options: ['JavaScript Syntax Extension', 'JavaScript XML', 'JavaScript Extended', 'JavaScript XML Syntax'],
    correctAnswer: 'JavaScript XML',
  },
  {
    question: 'What is the purpose of a React component?',
    options: ['To handle routing', 'To create animations', 'To build user interfaces', ' To manage server-side logic'],
    correctAnswer: 'To build user interfaces',
  },
  {
    question: 'What is the `useState` hook used for in React?',
    options: ['To manage side effects', 'To handle routing', 'To manage and update component state', ' To create new components'],
    correctAnswer: ' To manage and update component state',
  },
  {
    question: 'What is the virtual DOM in React?',
    options: [' A virtual reality platform', ' An alternative to the actual DOM', 'A server-side rendering technology', 'A JavaScript framework'],
    correctAnswer: 'An alternative to the actual DOM',
  },
  {
    question: 'What does "props" stand for in React components?',
    options: ['Properties', 'Proponents', 'Provisions', 'Propellers'],
    correctAnswer: 'Properties',
  },
  {
    question: 'How can you pass data from a parent component to a child component in React?',
    options: ['Using the `setState` method', 'Using the `props` system', ' Using the `context` API', 'By storing it in local storage'],
    correctAnswer: 'Using the `props` system',
  },
  {
    question: 'What is Redux in the context of React?',
    options: ['A router library', 'A database management system', ' A state management library', 'A CSS preprocessor'],
    correctAnswer: 'A state management library',
  },
  {
    question: 'What are React hooks, and why are they used?',
    options: ['Hooks are used for making HTTP requests in React', ' Hooks are used for styling React components.', ' Hooks are a way to add state and lifecycle features to functional components', ' Hooks are used for unit testing React applications.'],
    correctAnswer: 'Hooks are a way to add state and lifecycle features to functional components.',
  },
  {
    question: 'What is the purpose of React Router in a React application?',
    options: [' To manage state', ' To create animations', 'To handle routing and navigation', 'To generate form inputs'],
    correctAnswer: 'To handle routing and navigation',
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: 0,
      selectedOption: '',
      score: 0,
      showScore: false,
    };
  }

  handleOptionSelect = (selectedOption) => {
    this.setState({ selectedOption });
  };

  handleNextQuestion = () => {
    const { currentQuestion, selectedOption, score } = this.state;
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (selectedOption === correctAnswer) {
      this.setState({ score: score + 1 });
    }

    if (currentQuestion < questions.length - 1) {
      this.setState({
        currentQuestion: currentQuestion + 1,
        selectedOption: '',
      });
    } else {
      this.setState({ showScore: true });
    }
  };

  handleResetQuiz = () => {
    this.setState({
      currentQuestion: 0,
      selectedOption: '',
      score: 0,
      showScore: false,
    });
  };

  render() {
    const { currentQuestion, selectedOption, score, showScore } = this.state;
    const question = questions[currentQuestion];
    const currentQuestionNumber = currentQuestion + 1;
    const totalQuestions = questions.length;

    return (
      <div className='App'>
        <h1 className="heading">SPACE QUIZ MANIA</h1>
        <div className="quiz-app">
          {showScore ? (
            <div className="score-section">
              <p className='sp1'>Thank You For Participating</p>
              YOU HAVE SCORED {score} OUT OF {questions.length}
              <p className='sp1'>Keep Growing Your Knowledge</p>
              <p className='sp1'>With Us</p>
              <button className="reset-button" onClick={this.handleResetQuiz}>
                RESET QUIZ <i class="fa-regular fa-hand-peace fa-spin-pulse"></i>
              </button>
            </div>
          ) : (
            <>
              <div className="question-count">
                Question {currentQuestionNumber} / {totalQuestions}  <i class="fa-solid fa-stopwatch fa-beat"></i>
              </div>
              {question ? (
                <div className="question-section">
                  <h2>Question {currentQuestionNumber}</h2>
                  <p>{question.question}</p>
                </div>
              ) : (
                <div className="question-section">
                  <p>No more questions available.</p>
                </div>
              )}
              <p className="paragraph">"CHOOSE THE CORRECT ANSWER FROM THE FOLLOWING OPTIONS"</p>
              <div className="options-section">
                {question
                  ? question.options.map((option, index) => (
                      <button
                        key={index}
                        className={`option ${selectedOption === option ? 'selected' : ''}`}
                        onClick={() => this.handleOptionSelect(option)}
                      >
                        {option}
                      </button>
                    ))
                  : null}
              </div>
              {selectedOption && (
                <button className="next-button" onClick={this.handleNextQuestion}>
                  Next <i class="fa-solid fa-forward fa-fade"></i>
                </button>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;