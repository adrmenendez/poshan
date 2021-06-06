import React from 'react';

class Question extends React.Component {
  render() {
    return (
      <section className='question container'>
        <h2 className='question_title'>{this.props.question}</h2>
        <p className='question_description'>{this.props.description}</p>
        <div className='question_option container'>
          <div className='question_option--button'>
            <p>{this.props.option1}</p>
          </div>
          <div className='question_option--button'>
            <p>{this.props.option2}</p>
          </div>
          <div className='question_option--button'>
            <p>{this.props.option3}</p>
          </div>
          <div className='question_option--button'>
            <p>{this.props.option4}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Question;
