const calculateIMC = (weight, heigth) => {
  const imc = weight / ((heigth * heigth) / 100);
  if (imc < 24.9) {
    return 'volumen';
  } else {
    return 'definition';
  }
};

export default calculateIMC;
