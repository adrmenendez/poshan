import React, { useState } from 'react';
import getMostFrequent from '../services/getMostFrequent';
import getHtmlCode from '../services/getHtmlCode';
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
    const diet = chooseDiet(props.gender, props.meals, goal, sport);
    const htmlCode = getHtmlCode(diet);
    return htmlCode;
  };

  const handleClick = () => {
    paintDiet();
  };
  return (
    <>
      <NavBar />
      <div className='questionnaire'>
        <div className='container finalDiet'>
          <h2 className='font_subtitle--bold finalDiet_title'>
            Click here and download your personalized plan!:
          </h2>
          <button className='header_content--submit' onClick={handleClick()}>
            Download your plan
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default End;
