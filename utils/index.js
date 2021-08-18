export const getRandomBetween = (min, max) => {
  return Math.random() * (max - min) + min;
};
export const generateKey = () => {
  return (
    new Date().getTime().toString() +
    Math.floor(Math.random() * Math.floor(new Date().getTime())).toString()
  );
};
