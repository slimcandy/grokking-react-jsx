const { useState } = React;

function Table({ defaultCandies = [] }) {
  const [candies, setCandies] = useState(defaultCandies);

  function disableAll() {
    var nextCandies = candies.map((candy) => {
      return {
        ...candy,
        isDisabled: true,
      };
    });

    setCandies(nextCandies);
  }

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
                <button id="disable-all" onClick={disableAll}>
                  Отключить все
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {candies.map((candy) => (
              <Row key={candy.name} candy={candy} setCandies={setCandies} />
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
