import { REST_IMAGE_BASE_URL } from '../utils/constants';

// Restaurant card component
const RestaurantCard = ({ resData }) => {
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-img"
        src={`${REST_IMAGE_BASE_URL}${resData?.info?.cloudinaryImageId}`}
        alt="restaurant-image"
      />
      <h3>{resData?.info?.name}</h3>
      <h4>{resData?.info?.cuisines?.join(', ')}</h4>
      <h4>{resData?.info?.externalRatings?.aggregatedRating?.rating} ⭐️</h4>
      <h4>{resData?.info?.sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
