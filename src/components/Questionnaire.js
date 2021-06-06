import React from 'react';
import Question from './Question';

class Questionnaire extends React.Component {
  render() {
    return (
      <main className='questionnaire'>
        <nav className='questionnaire_header container'>
          <div className='questionnaire_header--back'>
            <i class='fas fa-arrow-left icon'></i>
            <p className='text'>Go Back</p>
          </div>
          <h1 className='questionnaire_header--logo'>poshan</h1>
        </nav>
        <Question
          question='How many meals do you want to make per day?'
          description='Choose the option that better suits you'
          option1={3}
          option2={4}
          option3={5}
          option4={2}
        />
      </main>
    );
  }
}

export default Questionnaire;
