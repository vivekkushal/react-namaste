import RestaurantCard from './RestaurantCard';

// Restaurant container component
const RestaurantContainer = ({ resList }) => {
  return (
    <div className="restaurant-container">
      {resList.map((rest) => (
        <RestaurantCard resData={rest} key={rest?.info?.id} />
      ))}
    </div>
  );
};

export default RestaurantContainer;
