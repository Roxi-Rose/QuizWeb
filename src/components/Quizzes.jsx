import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateTopic, deleteQuiz } from '../reducers/quizReducer';
import Header from './Header';
import Footer from './Footer';
import '../style/Home.css';
// import userImage from '../images/user.png';

function Quizzes() {
  const navigate = useNavigate();
  const quizData = useSelector(state => state.quiz.quizData);
  const dispatch = useDispatch();

  const handleClickEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleClickDelete = async (id) => {
    try {
      dispatch(deleteQuiz(id));
      localStorage.setItem('quizData', quizData.splice(id, 1));
    } catch (error) {
      console.error('Error deleting quiz:', error);
    }
  };  

  const handleClickTopic = (id) => {
    navigate(`/question/${id}`);
  }; 

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
            {quizData.map((topic, index) => (
              <section key={index} className='quiz-section'>
                <section className="editButtons">
                  <button className="Edit" onClick={() => handleClickEdit(index)}>Edit</button>
                  <button className="Del" onClick={() => handleClickDelete(index)}>Del</button>
                </section>
                <button className="topicbtn" onClick={() => handleClickTopic(index)}>
                  {topic.name}
                </button>
              </section>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Quizzes;