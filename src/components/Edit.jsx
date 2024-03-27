import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../style/Quiz.css';
// import userImage from '../images/user.png';

function Edit({ quizData }) {

  const navigate = useNavigate();
  const { id } = useParams();
  const [currentQuiz, setCurrentQuiz] = useState(null);

  useEffect(() => {
    const foundQuiz = quizData[id];
    setCurrentQuiz(foundQuiz);
  }, [quizData, id]);

  const handleQuestionChange = (index, updatedQuestion) => {
    const updatedQuiz = { ...currentQuiz };
    updatedQuiz.questions[index].question = updatedQuestion;
    setCurrentQuiz(updatedQuiz);
  };

  const handleOptionChange = (questionIndex, optionIndex, updatedOption) => {
    const updatedQuiz = { ...currentQuiz };
    updatedQuiz.questions[questionIndex].options[optionIndex] = updatedOption;
    setCurrentQuiz(updatedQuiz);
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuiz = { ...currentQuiz };
    updatedQuiz.questions.splice(index, 1);
    setCurrentQuiz(updatedQuiz);
  };

  const handleAddQuestion = () => {
    const updatedQuiz = { ...currentQuiz };
    updatedQuiz.questions.push({
      question: '',
      options: ['', '', '', ''],
      correct_answer: '',
      points: 5,
    });
    setCurrentQuiz(updatedQuiz);
  };

  const handleTopicNameChange = (updatedName) => {
    const updatedQuiz = { ...currentQuiz };
    updatedQuiz.name = updatedName;
    setCurrentQuiz(updatedQuiz);
  };

  const handleUpdateQuiz = () => {
    console.log('Updated Quiz Data:', currentQuiz);
  };

  return (
    <div className="modify">
      <Header />
      <div className="mainPage">
        <section className="modify-content">
          {currentQuiz && (
            <React.Fragment>
              <section className="top">
                <button className="back" onClick={() => navigate('/quizzes')}>back</button>
                <h2 className="title">Modify Quiz: {currentQuiz.name}</h2>
                <button className="update" onClick={handleUpdateQuiz}>Update</button>
              </section>
              <section className="questions">
                {currentQuiz.questions.map((question, questionIndex) => (
                  <div key={questionIndex} className="question">
                    <section className="question-modify">
                      <p className="ques">
                        <textarea
                          value={question.question}
                          onChange={(e) => handleQuestionChange(questionIndex, e.target.value)}
                        />
                      </p>
                      <button className="delete" onClick={() => handleDeleteQuestion(questionIndex)}>D</button>
                    </section>
                    <section className="options">
                      {question.options.map((option, optionIndex) => (
                        <label key={optionIndex}>
                          <input
                            type="text"
                            value={option}
                            onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)}
                          />
                        </label>
                      ))}
                    </section>
                  </div>
                ))}
                <button className="add" onClick={handleAddQuestion}>+</button>
              </section>
              <section className="topic-name">
                <label>
                  Topic Name:
                  <input
                    type="text"
                    value={currentQuiz.name}
                    onChange={(e) => handleTopicNameChange(e.target.value)}
                  />
                </label>
              </section>
            </React.Fragment>
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Edit;