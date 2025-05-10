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
                <button id="disable-all">Отключить все</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {candies.map((candy) => (
              <tr>
                <th scope="row">{candy.name}</th>
                <td class="price">{candy.price}</td>
                <td>
                  <button>Отключить позицию</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
