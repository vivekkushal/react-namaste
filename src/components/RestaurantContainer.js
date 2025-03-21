import Shimmer from './Shimmer';
import RestaurantCard from './RestaurantCard';

// Restaurant container component
const RestaurantContainer = ({ resList }) => {
  return (
    <div className="restaurant-container">
      {resList.length ? (
        resList.map((rest) => (
          <RestaurantCard resData={rest} key={rest?.info?.id} />
        ))
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default RestaurantContainer;
