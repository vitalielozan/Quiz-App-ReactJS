export const shuffle = (array) => {
  if (!Array.isArray(array)) {
    console.error('shuffle() getin not an array!', array);
    return [];
  }

  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[random]] = [arr[random], arr[i]];
  }

  return arr;
};
