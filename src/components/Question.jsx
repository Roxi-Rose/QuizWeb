import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
// import userImage from '../images/user.png';

function Question() {

  return (
    <div className="quiz">
      <Header />
      <div className="mainPage">
        <section className="quiz-content">
          <section className="top">
            <button className="back" onClick={() => navigate('/')}>back</button>
            <h2 className="title">Quiz Name</h2>
            <p className="score">Highest: 0</p>
          </section>
          <section className="quiz-handler">
            <section className="question">
              <p className="ques">What is 2 + 2?</p>
              <label><input type='radio' name="ques" value="3"></input>3</label>
              <label><input type='radio' name="ques" value="4"></input>4</label>
              <label><input type='radio' name="ques" value="5"></input>5</label>
              <label><input type='radio' name="ques" value="6"></input>6</label>
            </section>
            <section className="buttons">
              <section className='navbuttons'>
                <button className="prev">prev</button>
                <button className="next">next</button>
              </section>
              <button className="confirm">confirm</button>
              <button className="playagain">play again</button>
              <button className="answer">answer</button>
            </section>
          </section>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Question;