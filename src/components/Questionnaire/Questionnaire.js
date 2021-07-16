import React from 'react';
import Question from './Question';

class Questionnaire extends React.Component {
  render() {
    return (
      <main className='questionnaire'>
        <Question
          questionObject={this.props.questionObject}
          handleTextInput={this.props.handleTextInput}
          handleButtonClick={this.props.handleButtonClick}
          name={this.props.name}
          age={this.props.age}
          weight={this.props.weight}
          heigth={this.props.heigth}
        />
      </main>
    );
  }
}

export default Questionnaire;
