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
        />
      </main>
    );
  }
}

export default Questionnaire;

//como usamos el data
//con el peso y la altura calculamos el IMC y vamos a definición o volumen
//con todas las preguntas de deporte, en función de cuantas seleccione de cada categoría vamos a 'super', 'active', 'moderate' o 'lazy'
//Dentro de cada actividad, número de comidas que se quieren hacer
//Limpiamos la dieta con los alimentos que no nos gustan o a los que somos intolerantes
