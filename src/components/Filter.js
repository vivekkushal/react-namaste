// Filter component
const Filter = ({ filterHandler }) => {
  return (
    <div className="filter">
      <button onClick={filterHandler} className="filter-btn">
        Top Rated Restaurants
      </button>
    </div>
  );
};

export default Filter;
