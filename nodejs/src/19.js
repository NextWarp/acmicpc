function capitalizeFirst (arr) {
  if (arr.length <= 0) return [];
  const target = arr.shift();
  const capitalize = target.charAt(0).toUpperCase() + target.slice(1);
  return [capitalize, ...capitalizeFirst(arr)];
}


console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
  