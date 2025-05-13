function Row({ candy, setCandies }) {
  function disableCandy(candyName) {
    var nextCandies = candies.map((c) => {
      if (c.name === candyName) {
        c.isDisabled = !c.isDisabled;
      }

      return c;
    });

    setCandies(nextCandies);
  }

  if (candy.isDisabled) {
    return (
      <tr>
        <th scope="row">
          <s>
            <i>{candy.name}</i>
          </s>
        </th>
        <td className="price">
          <s>
            <i>{candy.price}</i>
          </s>
        </td>
        <td>
          <button disabled={candy.isDisabled}>
            <s>
              <i>Отключить позицию</i>
            </s>
          </button>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <th scope="row">{candy.name}</th>
      <td className="price">{candy.price}</td>
      <td>
        <button onClick={() => disableCandy(candy.name)}>
          Отключить позицию
        </button>
      </td>
    </tr>
  );
}
