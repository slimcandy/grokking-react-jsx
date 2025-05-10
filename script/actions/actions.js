import { candies } from "../variables.js";

function disableCandy(name) {
  const candy = candies.find((candy) => candy.name === name);
  if (candy) {
    candy.isDisabled = true;
  }
}

function disableAllCandies() {
  candies.forEach((candy) => (candy.isDisabled = true));
}

export { disableCandy, disableAllCandies };
