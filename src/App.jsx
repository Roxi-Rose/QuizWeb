import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setQuizData } from './reducers/quizReducer';
import Home from './components/Home';
import Quizzes from './components/Quizzes';
import Question from './components/Question';
import Edit from './components/Edit';
import Create from './components/Create'
import setQuizDataToLocalStorage from '../data/localStorage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setQuizDataToLocalStorage();
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('quizData')) || [];
    dispatch(setQuizData(dataFromLocalStorage));
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/question/:id" element={<Question />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;