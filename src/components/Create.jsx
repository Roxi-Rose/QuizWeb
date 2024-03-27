import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTopic } from '../reducers/quizReducer';
import Header from './Header';
import Footer from './Footer';
import '../style/Create.css';

function Create() {
  const [formData, setFormData] = useState({
    name: '',
    question: '',
    options: ['', '', '', ''],
    correctAnswer: '',
    points: 5,
    highScore: 0
  });

  const quizData = useSelector(state => state.quiz.quizData);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...formData.options];
    newOptions[index] = value;
    setFormData({
      ...formData,
      options: newOptions
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTopic = {
      name: formData.name,
      questions: [{
        question: formData.question,
        options: formData.options,
        correct_answer: formData.correctAnswer,
        points: parseInt(formData.points)
      }],
      highest_score: parseInt(formData.highScore) // Initially high score is 0
    };
    const updatedQuiz = [...quizData, newTopic];
    dispatch(updateTopic(updatedQuiz));
    // Reset form after submission
    setFormData({
      name: '',
      question: '',
      options: ['', '', '', ''],
      correctAnswer: '',
      points: 5,
      highScore: 0
    });
  };

  return (
    <div className="parent-container">
      <Header />
      <section className="addForm">
        <form className='form' onSubmit={handleSubmit}>
          <label>
            <input type="text" placeholder="Quiz Name" name="name" value={formData.name} onChange={handleInputChange} />
            <input type="text" placeholder="Question" name="question" value={formData.question} onChange={handleInputChange} />
            <input type="text" placeholder="Option1" name="option1" value={formData.options[0]} onChange={(e) => handleOptionChange(0, e.target.value)} />
            <input type="text" placeholder="Option2" name="option2" value={formData.options[1]} onChange={(e) => handleOptionChange(1, e.target.value)} />
            <input type="text" placeholder="Option3" name="option3" value={formData.options[2]} onChange={(e) => handleOptionChange(2, e.target.value)} />
            <input type="text" placeholder="Option4" name="option4" value={formData.options[3]} onChange={(e) => handleOptionChange(3, e.target.value)} />

            <input type="text" placeholder="Correct Answer" name="correctAnswer" value={formData.correctAnswer} onChange={handleInputChange} />

            <input type="number" placeholder="Points" name="points" value={formData.points} onChange={handleInputChange} />

            <input type="number" placeholder="High Score" name="highScore" value={formData.highScore} onChange={handleInputChange} />
          </label>
          <button type="submit" className="create">Create</button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default Create;