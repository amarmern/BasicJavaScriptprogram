const items = [1, 2, 3, 1, 2, 3, 7, 8, 7];

const removeDuplicate = items.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, []);

console.log(removeDuplicate);
