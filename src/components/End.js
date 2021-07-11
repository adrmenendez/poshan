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
    if (mostFrequent === '0') {
      return 'lazy';
    } else if (mostFrequent === '1') {
      return 'moderate';
    } else if (mostFrequent === '2') {
      return 'active';
    } else {
      return 'super';
    }
  };

  const [goal] = useState(calculateIMC());
  const [sport] = useState(calculateActivity());

  const displayDiet = () => {
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

  return (
    <>
      <NavBar />
      <div className='questionnaire'>
        <h2 className='font_title'>{displayDiet()}</h2>
      </div>
      <Footer />
    </>
  );
};

export default End;
