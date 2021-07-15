import React from 'react';
import { Link } from 'react-router-dom';

class Question extends React.Component {
  render() {
    const questionData = this.props.questionObject;
    const findNextRoute = () => {
      if (parseInt(questionData.id) === 18) {
        return '/end';
      } else {
        return `/question/${parseInt(questionData.id) + 1}`;
      }
    };

    const displayOptions = () => {
      if (typeof questionData.options === 'string') {
        return (
          <>
            <input
              className='question_option--input'
              type='text'
              placeholder={questionData.input.placeholder}
              name={questionData.input.name}
              onChange={this.props.handleTextInput}
            />
            <Link className='question_option--next' to={findNextRoute()}>
              Next
            </Link>
          </>
        );
      } else {
        return questionData.options.map((option, index) => {
          return (
            <Link className='question_option--button' to={findNextRoute()}>
              <input
                id={index}
                type='button'
                name={questionData.name}
                value={option}
                onClick={this.props.handleButtonClick}
                className='question_option--value'
              />
            </Link>
          );
        });
      }
    };

    const findBackRoute = () => {
      if (parseInt(questionData.id) === 10) {
        return '/start';
      } else {
        return `/question/${parseInt(questionData.id) - 1}`;
      }
    };
    return (
      <>
        <nav className='questionnaire_header container'>
          <div className='questionnaire_header--back'>
            <i className='fas fa-arrow-left icon'></i>
            <Link className='text' to={findBackRoute()}>
              Go back
            </Link>
          </div>
          <Link to='/'>
            <h1 className='questionnaire_header--logo'>poshan</h1>
          </Link>
        </nav>
        <section className='question container'>
          <h2 className='font_h1'>{questionData.question}</h2>
          <p className='font_subtitle'>{questionData.description}</p>
          <div className='question_option container'>{displayOptions()}</div>
        </section>
      </>
    );
  }
}

export default Question;
