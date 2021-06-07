import React from 'react';
import { Link } from 'react-router-dom';
//components
import Card from './Card';
import HowSection from './HowSection';
//images
import plan from '../../images/plan.jpg';
import flex from '../../images/flex.png';
import board from '../../images/board.png';
import planBis from '../../images/plan.png';
import recipes from '../../images/recipes.png';
import send from '../../images/send.jpg';

class Main extends React.Component {
  render() {
    return (
      <main className='main'>
        <article className='intro container'>
          <div className='intro_box'>
            <img src={plan} alt='meal-plan' className='intro_box--img' />
          </div>
          <div className='intro_main'>
            <h2 className='intro_title font_subtitle--bold'>Eat conciously</h2>
            <p className='intro_description font_description'>
              A well planned diet is essential to achieve a good physical and
              mental health. Most people doesn't know how much should they eat
              or which kind of food is the best. We want to give you the clue
              for eating clean and balanced forever.
            </p>
          </div>
        </article>
        <section className='philosophy'>
          <h2 className='philosophy-content_title font_subtitle--bold'>
            Our philosophy
          </h2>
          <section className='philosophy-content'>
            <Card
              src={flex}
              alt='flexibility'
              description='We give you freedom to choose what to eat.'
              subtitle='Stop being attached to a fixed diet'
            />
            <Card
              src={board}
              alt='flexibility'
              description='Just eating clean will easily jump you to the top.'
              subtitle='Our plans are totally based on real food.'
            />
            <Card
              src={planBis}
              alt='flexibility'
              description="You don't have yo eat anything you don't like."
              subtitle='Your habits and likes really matters.'
            />
            <Card
              src={recipes}
              alt='flexibility'
              description="Time doesn't matter to reach your goals."
              subtitle='Get our microwave recipes book.'
            />
          </section>
        </section>
        <section className='how container'>
          <div
            className='how_img'
            style={{ backgroundImage: `url(${send})` }}
          ></div>
          <section className='how_main'>
            <h2 className='how_title font_subtitle--bold'>How it works</h2>
            <HowSection
              number={1}
              subtitle='Tell us about you'
              description='We’ll create a meal plan that’s designed & portioned just for you'
            />
            <HowSection
              number={2}
              subtitle='Select your habits'
              description='You tell us what you like and we calculate the perfect amount for you.'
            />
            <HowSection
              number={3}
              subtitle='Check your inbox'
              description='Your inbox bell show the beginning of a new lifestyle.'
            />
          </section>
        </section>
        <section className='start'>
          <section className='start_content'>
            <h2 className='font_title'>Your new recommended plan</h2>
            <p className='start_content--subtitle font_subtitle'>
              Answer some questions about you and we'll create the perfect plan
            </p>
            <Link to='/questionnaire' className='header_content--submit'>
              Start now
            </Link>
          </section>
        </section>
      </main>
    );
  }
}

export default Main;
