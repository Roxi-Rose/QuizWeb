import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
// import userImage from '../images/user.png';

function Quizzes() {

  return (
    <div className="topics">
      <Header />
      <div className="mainPage">
        <section className="topics-section">
          <section className="top">
            <button className="back" onClick={() => navigate('/')}>back</button>
            <h2 className="profile">Quizzes</h2>
          </section>
          <div className="topics-content">
          <section className='quiz-section'>
                <section className="editButtons">
                  <button className="Edit" >Edit</button>
                  <button className="Del" >Del</button>
                </section>
                <button className="topicbtn">
                  Topic Name
                </button>
              </section>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Quizzes;