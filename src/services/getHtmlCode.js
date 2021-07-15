const getHtmlCode = (diet) => {
  const htmlCode = diet.meals.map((meal, index) => {
    return (
      <>
        <h2 className='font_description--bold meals_title'>
          Meal {[index + 1]}{' '}
          {meal.options ? `(Pick ${meal.options} options)` : ''}
        </h2>
        {meal.protein ? (
          <p className='font_description'>- {meal.protein}</p>
        ) : (
          ''
        )}
        <p className='font_description'>- {meal.extra}</p>
      </>
    );
  });

  const carbsCode = (
    <>
      <h2 className='font_description--bold carbs_title'>
        Add one option of the following paragraph {diet.carbs.days} days per
        week at {diet.carbs.meals}:
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

export default getHtmlCode;
