function Search(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label htmlFor="search"> Find Articles </label>
      <input
        type="text"
        placeholder="What's going on today?"
        onChange={props.onChange}
        id="search"
        name="search"
      />
      <button type="submit"> Go! </button>
    </form>
  );
}

export default Search;
