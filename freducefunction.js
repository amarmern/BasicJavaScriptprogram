const items = [1, 2, 3, 1, 2, 3, 7, 8, 7];

const removeDuplicate = items.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, []);

console.log(removeDuplicate);

...................................

const items = [
  { name: 'Apple', category: 'Fruit' },
  { name: 'Onion', category: 'Vegetable' },
  { name: 'Orange', category: 'Fruit' },
  { name: 'Lettuce', category: 'Vegetable' },
];

const groupedItem = items.reduce((acc, item) => {
  const category = item.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(item.name);
  return acc;
}, {});

console.log(groupedItem);
