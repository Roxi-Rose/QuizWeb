import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Quizzes from './components/Quizzes';
import Question from './components/Question';
import Edit from './components/Edit';
import Create from './components/Create'
import setQuizDataToLocalStorage from '../data/localStorage';

const App = () => {
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    setQuizDataToLocalStorage();
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('quizData')) || [];
    setQuizData(dataFromLocalStorage);
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizzes" element={<Quizzes quizData={quizData} />} />
          <Route path="/question/:id" element={<Question quizData={quizData} />} />
          <Route path="/edit/:id" element={<Edit quizData={quizData} />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
