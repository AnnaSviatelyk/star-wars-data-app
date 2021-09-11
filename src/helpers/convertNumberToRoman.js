const romanMatrix = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
};

const convertNumberToRoman = (number) => {
  return romanMatrix[number];
};

export default convertNumberToRoman;
