import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../style/Home.css';
// import userImage from '../images/user.png';
import profileImage from '../images/profile.jpg';
import quizImage from '../images/quiz.jpg';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Header />
      <div className="mainPage">
          <button className="quiz-button" onClick={() => navigate('/quizzes')}>
            <img src={quizImage} alt="Quizzes" />
          </button>
      </div>
      <Footer />
    </div>
  );
}

export default Home;