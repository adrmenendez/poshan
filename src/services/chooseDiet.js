import femaleDef from '../data/femaleDef.json';
import femaleVol from '../data/femaleVol.json';
import maleDef from '../data/maleDef.json';
import maleVol from '../data/maleVol.json';

const chooseDiet = (gender, meals, goal, sport) => {
  if (gender === 'female' && goal === 'definition') {
    const finalDiet = femaleDef[sport][meals];
    return finalDiet;
  } else if (gender === 'female' && goal === 'volumen') {
    const finalDiet = femaleVol[sport][meals];
    return finalDiet;
  } else if (gender === 'male' && goal === 'definition') {
    const finalDiet = maleDef[sport][meals];
    return finalDiet;
  } else if (gender === 'male' && goal === 'volumen') {
    const finalDiet = maleVol[sport][meals];
    return finalDiet;
  }
};

export default chooseDiet;
