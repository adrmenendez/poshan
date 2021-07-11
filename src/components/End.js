import React, { useState } from 'react';
import dietData from '../data/diet.json';
import Footer from './Footer';
import NavBar from './NavBar';

const End = (props) => {
  const calculateIMC = () => {
    const imc = props.weight / ((props.heigth * props.heigth) / 100);
    if (imc < 24.9) {
      return 'volumen';
    } else {
      return 'definition';
    }
  };

  const calculateActivity = () => {
    let counts = {};
    let compare = 0;
    let mostFrequent;
    const arr = props.sport;
    for (let i = 0; i < arr.length; i++) {
      let number = arr[i];
      if (counts[number] === undefined) {
        counts[number] = 1;
      } else {
        counts[number] = counts[number] + 1;
      }
      if (counts[number] > compare) {
        compare = counts[number];
        mostFrequent = arr[i];
      }
    }
    if (mostFrequent === '0' || mostFrequent === '1') {
      return 'lazy';
    } else {
      return 'active';
    }
  };

  const [goal] = useState(calculateIMC());
  const [sport] = useState(calculateActivity());

  const chooseDiet = () => {
    const data = dietData;
    const meals = props.meals;
    if (props.gender === 'female') {
      const finalDiet = data.female[goal][sport][meals];
      return finalDiet;
    } else if (props.gender === 'male') {
      const finalDiet = data.male[goal][sport][meals];
      return finalDiet;
    }
  };

  const paintDiet = () => {
    const diet = chooseDiet();
    const htmlCode = diet.meals.map((meal, index) => {
      return (
        <>
          <h2>Meal {[index + 1]}</h2>
          <p>- {meal.protein}</p>
          <p>- {meal.extra}</p>
        </>
      );
    });

    const carbsCode = (
      <>
        <h2>
          Add one option of the following paragraph {diet.carbs.days} per week
          with the meal you want:
        </h2>
        <p>- {diet.carbs.carbs}</p>
      </>
    );

    return (
      <>
        <div>{htmlCode}</div>
        <div>{carbsCode}</div>
      </>
    );
  };
  return (
    <>
      <NavBar />
      <div className='questionnaire'>
        {/* No puedo descomentar la siguiente línea hasta que no complete todo el JSON
        de data o me da error por no poder recorrer los arrays */}
        {/* Aquí añado un botón y cuando lo pulse aparece la dieta :)) */}
        {/* <div>{paintDiet()}</div> */}
        {/* <p>{JSON.stringify(dietData.male.definition.active.three)}</p> */}
      </div>
      <Footer />
    </>
  );
};

export default End;
