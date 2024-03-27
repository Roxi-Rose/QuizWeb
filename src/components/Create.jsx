import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../style/Create.css';

function Create() {

  return (
    <div className="parent-container">
      <Header />
      <section className="addForm">
        <form className='form'>
          <label>
            <input type="text" placeholder="Quiz Name" name="name"/>
            <input type="text" placeholder="Question" name="question"/>
            <input type="text" placeholder="Option1" name="option1" />
            <input type="text" placeholder="Option2" name="option2"/>
            <input type="text" placeholder="Option3" name="option3"/>
            <input type="text" placeholder="Option4" name="option4"/>

            <input type="text" placeholder="Correct Answer" name="correctAnswer" />

            <input type="number" placeholder="Points" name="points" />

            <input type="number" placeholder="High Score" name="highScore" />
          </label>
          <button type="submit" className="create">Create</button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default Create;