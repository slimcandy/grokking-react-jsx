import { renderTable } from "../render.js";
import { disableCandy, disableAllCandies } from "./actions.js";
import { candies } from "../variables.js";

/**
 * Добавь перерисовку к событиям
 */
function actionWrapper(candiesMutatorFunction) {
  return function (...args) {
    candiesMutatorFunction(...args);

    renderTable(candies);
  };
}

const wrappedDisableAll = actionWrapper(disableAllCandies);
const wrappedDisableCandy = actionWrapper(disableCandy);

export {
  wrappedDisableAll as disableAllCandies,
  wrappedDisableCandy as disableCandy,
};
