const candies = [
  {
    name: "Пралине",
    price: 45,
    isDisabled: false,
  },
  {
    name: "Молочные",
    price: 25,
    isDisabled: true,
  },
  {
    name: "Карамельные",
    price: 96,
    isDisabled: false,
  },
  {
    name: "Крафтовые",
    price: 113,
    isDisabled: false,
  },
];

function App(){
  return (<Table defaultCandies={candies} />)
}