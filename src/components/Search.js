// Search component
const Search = ({ changeHandler, searchHandler, searchText }) => {
  return (
    <div className="search">
      <input
        className="search-box"
        type="text"
        value={searchText}
        onChange={(e) => changeHandler(e.target.value)}
      />
      <button className="search-btn" onClick={() => searchHandler(searchText)}>
        Search
      </button>
    </div>
  );
};

export default Search;
