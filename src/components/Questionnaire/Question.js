import React from 'react';

class Question extends React.Component {
  render() {
    const renderOptions = this.props.options.map((option) => {
      return (
        <div className='question_option--button'>
          <p>{option}</p>
        </div>
      );
    });
    return (
      <section className='question container'>
        <h2 className='font_h1'>{this.props.question}</h2>
        <p className='font_subtitle'>{this.props.description}</p>
        <div className='question_option container'>{renderOptions}</div>
      </section>
    );
  }
}

export default Question;
