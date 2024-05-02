function solution(N, K) {
  const totalCapacity = (N * (N + 1)) / 2;
  if (K > totalCapacity || K < 1) {
    return -1;
  }

  let glassesNeeded = 0;
  let remainingWater = K;

  for (let i = N; i > 0; i--) {
    if (remainingWater >= i) {
      remainingWater -= i;
      glassesNeeded++;
      if (remainingWater === 0) {
        break;
      }
    }
  }

  return glassesNeeded;
}

console.log("==================asd=", solution(10, 5));
