import React from 'react';
import Question from './Question';
import questionData from '../../data/questions.json';

class Questionnaire extends React.Component {
  render() {
    const renderQuestions = questionData.map((question) => {
      return (
        <Question
          question={question.question}
          description={question.description}
          options={question.options}
        />
      );
    });
    return (
      <main className='questionnaire'>
        <nav className='questionnaire_header container'>
          <div className='questionnaire_header--back'>
            <i class='fas fa-arrow-left icon'></i>
            <p className='text'>Go Back</p>
            {/* Hacer aqui un Link que clicke al id-1 para volver a la pregunta anterior */}
          </div>
          <h1 className='questionnaire_header--logo'>poshan</h1>
        </nav>
        {renderQuestions}
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
