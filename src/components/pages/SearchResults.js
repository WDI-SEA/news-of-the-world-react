export default function SearchResults({
  results,
  handleClick,
  favorites,
  showFaves,
}) {
  const searchTable = results.map((element, index) => {
    return (
      <tr key={`article-id=${index}`}>
        <td>{element.source.name}</td>
        <td>{element.title}</td>
        <td>{element.content}</td>
        <td>
          <button type="button" onClick={() => handleClick(element)}>
            {favorites.includes(element) ? "-" : "+"}
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div>
      {results.length > 0 ? (
        <table>
          <tbody>
            <tr>
              <th>Source</th>
              <th>Title</th>
              <th>Summary</th>
              <th>Favorite</th>
            </tr>
            {searchTable}
          </tbody>
        </table>
      ) : (
        <div>
          <p>
            No Search Results! Type something into the search box and submit!
          </p>
        </div>
      )}
    </div>
  );
}
