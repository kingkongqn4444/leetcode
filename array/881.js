/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  const peoples = people.sort((a, b) => a - b);
  let boards = 0;
  let left = 0;
  let right = peoples.length - 1;
  while (left <= right) {
    if (peoples[left] + peoples[right] <= limit) {
      left++;
      right--;
    } else {
      right--;
    }
    boards++;
  }

  return boards;
};

console.log(numRescueBoats([1, 2, 4, 5], 6));
