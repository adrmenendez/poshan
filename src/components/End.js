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
    let htmlCode;
    if (props.age < 18) {
      htmlCode = (
        <div>
          <h2 className='font_title finalDiet_title'>
            Hey {props.name}! You're still growing up!
          </h2>
          <p className='font_subtitle'>
            Eat clean, eat balanced and do as much sport as you can!
          </p>
          <p className='font_subtitle'>
            Come here again in a few years and we will calculate the perfect
            plan for you!
          </p>
        </div>
      );
    } else {
      const diet = chooseDiet(props.gender, props.meals, goal, sport);
      htmlCode = getHtmlCode(diet, props.name);
    }
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
          {/* <button className='header_content--submit' onClick={handleClick()}>
            Download your plan
          </button> */}
          {paintDiet()}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default End;
