const { useState } = React;

function Table({ defaultCandies = [] }) {
  const [candies, setCandies] = useState(defaultCandies);

  return (
    <>
      <header>
        <h1>Конфетная лавка</h1>
      </header>
      <main>
        <table
          className="striped"
          style={{
            maxWidth: 700,
          }}
        >
          <caption>Панель управления</caption>
          <thead>
            <tr>
              <th scope="col">Название</th>
              <th scope="col">Цена</th>
              <th scope="col">
                Действия
                <button
                  id="disable-all"
                  onClick={function disableAll() {
                    var nextCandies = candies.map((candy) => {
                      return {
                        ...candy,
                        isDisabled: true,
                      };
                    });

                    setCandies(nextCandies);
                  }}
                >
                  Отключить все
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {candies.map((candy) => (
              <tr key={candy.name}>
                <th scope="row">
                  {candy.isDisabled ? <s>{candy.name}</s> : candy.name}
                </th>
                <td className="price">{candy.price}</td>
                <td>
                  <button
                    disabled={candy.isDisabled}
                    onClick={function disableCandy() {
                      var nextCandies = candies.map((c) => {
                        if (c.name === candy.name) {
                          c.isDisabled = !c.isDisabled;
                        }

                        return c;
                      });

                      setCandies(nextCandies);
                    }}
                  >
                    Отключить позицию
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
