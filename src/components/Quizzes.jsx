import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../style/Home.css';
// import userImage from '../images/user.png';

function Quizzes({ quizData }) {

  const navigate = useNavigate();

  const handleClickModify = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleClickDelete = (id) => {
    // Add your delete logic here
  };

  const handleClickTopic = (id) => {
    navigate(`/question/${id}`);
  };

  return (
    <div className="topics">
      <Header />
          <div className="topics-content">
            {quizData.map((topic, index) => (
              <section key={index}>
                <button className="modify" onClick={() => handleClickModify(index)}>M</button>
                <button className="delete" onClick={() => handleClickDelete(index)}>D</button>
                <button className="topic-button" onClick={() => handleClickTopic(index)}>
                  <img src={`path/to/${topic.name}.png`} alt={topic.name} />
                </button>
              </section>
            ))}
          </div>
      <Footer />
    </div>
  );
}

export default Quizzes;