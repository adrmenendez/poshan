import React, { useState } from 'react';
import dietData from '../data/diet.json';
import getMostFrequent from '../services/getMostFrequent';
import calculateIMC from '../services/calculateIMC';
import chooseDiet from '../services/chooseDiet';
import Footer from './Footer';
import NavBar from './NavBar';

const End = (props) => {
  const [goal] = useState(calculateIMC(props.weigth, props.weigth));
  const [sport] = useState(
    getMostFrequent([props.weekends, props.sportDays, props.alcohol])
  );

  const paintDiet = () => {
    const diet = chooseDiet(dietData, props.gender, props.meals, goal, sport);
    const htmlCode = diet.meals.map((meal, index) => {
      return (
        <>
          <h2 className='font_description--bold meals_title'>
            Meal {[index + 1]}
          </h2>
          <p className='font_description'>- {meal.protein}</p>
          <p className='font_description'>- {meal.extra}</p>
        </>
      );
    });

    const carbsCode = (
      <>
        <h2 className='font_description--bold carbs_title'>
          Add one option of the following paragraph {diet.carbs.days} days per
          week with the meal you want:
        </h2>
        <p className='font_description'>- {diet.carbs.carbs}</p>
      </>
    );

    return (
      <>
        <div className='meals'>{htmlCode}</div>
        <div className='carbs'>{carbsCode}</div>
      </>
    );
  };
  return (
    <>
      <NavBar />
      <div className='questionnaire'>
        <div className='container finalDiet'>
          <h2 className='font_subtitle--bold finalDiet_title'>
            Here you can download your personalized plan!:
          </h2>
          {/* No puedo descomentar la siguiente línea hasta que no complete todo el JSON
          de data o me da error por no poder recorrer los arrays */}
          {/* Aquí añado un botón y cuando lo pulse aparece la dieta :)) */}
          <div className='finalDiet_diet'>{paintDiet()}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default End;
