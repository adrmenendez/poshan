import React from 'react';
import { Link } from 'react-router-dom';

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
        <section className='questionnaire_welcome container'>
          <h1 className='font_h1'>Hello! Welcome to poshan</h1>
          <h2 className='font_subtitle'>
            Tell us about you and we'll create a personalised meal plan just for
            you
          </h2>
          <Link className='questionnaire_welcome--button' to='/question/:id'>
            Let's go
          </Link>
        </section>
      </main>
    );
  }
}

export default Questionnaire;
