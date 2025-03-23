import Search from './Search';

// Filter component
const Filter = ({
  filterHandler,
  changeHandler,
  searchHandler,
  searchText,
}) => {
  return (
    <div className="filter">
      <Search
        changeHandler={changeHandler}
        searchHandler={searchHandler}
        searchText={searchText}
      />
      <button onClick={filterHandler} className="filter-btn">
        Top Rated Restaurants
      </button>
    </div>
  );
};

export default Filter;
