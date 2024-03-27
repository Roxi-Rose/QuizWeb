import React from 'react'
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <div className='header'>
      <div className='title'>
        <h2>Quiz App</h2>
      </div>
      <div>
        <nav className="nav">
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/quizzes')}>Quizzes</button>
          <button onClick={() => navigate('/create')}>Create</button> 
        </nav>
      </div>
    </div>
  )
}

export default Header