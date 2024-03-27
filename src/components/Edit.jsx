import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../style/Quiz.css';
// import userImage from '../images/user.png';

function Edit() {

  return (
    <div className="quiz">
      <Header />
      <div className="mainPage">
        <section className="quiz-content">
          <section className="top">
            <button className="back" onClick={() => navigate('/quizzes')}>back</button>
            <h2 className="title">Edit</h2>
            <button className="update">Update</button>
          </section>
            <section className="question">
              <section className="modify">
                <p className="ques">What is 2 + 2?</p>
                <button className="change">Edit</button>
                <button className="delete">Del</button>
              </section>
              <section className="options">
                <label><input type='radio' name="ques" value="3"></input>3</label>
                <label><input type='radio' name="ques" value="4"></input>4</label>
                <label><input type='radio' name="ques" value="5"></input>5</label>
                <label><input type='radio' name="ques" value="6"></input>6</label>
              </section>
              <button className="add">+</button>
            </section>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Edit;