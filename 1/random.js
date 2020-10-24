function randomDozensCrescentOrder(min = 1, max = 60) {
  const array = [];
  for (; array.length < 6;) {
    let random = Math.floor(Math.random() * (max - min) + min);
    if (!array.includes(random)) {
      array.push(random);
    }
  }
  return array.sort((a, b) => {return a - b});
}
