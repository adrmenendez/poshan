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

//como usamos el data
//con el peso y la altura calculamos el IMC y vamos a definición o volumen
//con todas las preguntas de deporte, en función de cuantas seleccione de cada categoría vamos a 'super', 'active', 'moderate' o 'lazy'
//Dentro de cada actividad, número de comidas que se quieren hacer
//Limpiamos la dieta con los alimentos que no nos gustan o a los que somos intolerantes
