export default function Favorites({ favorites }) {
  const searchTable = favorites.map((element, index) => {
    return (
      <tr key={`article-id=${index}`}>
        <td>{element.source.name}</td>
        <td>{element.title}</td>
        <td>{element.content}</td>
      </tr>
    );
  });
  return (
    <div>
      {favorites.length > 0 ? (
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
          <p>No Favorites! Search and Add to Favorites!</p>
        </div>
      )}
    </div>
  );
}
