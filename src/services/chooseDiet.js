const chooseDiet = (data, gender, meals, goal, sport) => {
  const dietData = data;
  if (gender === 'female') {
    const finalDiet = dietData.female[goal][sport][meals];
    return finalDiet;
  } else if (gender === 'male') {
    const finalDiet = dietData.male[goal][sport][meals];
    return finalDiet;
  }
};

export default chooseDiet;
