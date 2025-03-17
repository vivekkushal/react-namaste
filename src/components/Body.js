import { useState } from 'react';

import Filter from './Filter';
import RestaurantContainer from './RestaurantContainer';

import resList from '../utils/data';

// Body component
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  // let listOfRestaurants = [
  //   {
  //     info: {
  //       id: '636723',
  //       name: 'Chinese Wok',
  //       cloudinaryImageId: 'e0839ff574213e6f35b3899ebf1fc597',
  //       cuisines: ['Chinese', 'Asian', 'Tibetan', 'Desserts'],
  //       avgRating: 4.3,
  //       parentId: '61955',
  //       avgRatingString: '4.3',
  //       totalRatingsString: '1.7K+',
  //       sla: {
  //         deliveryTime: 29,
  //         lastMileTravel: 4,
  //         serviceability: 'SERVICEABLE',
  //         slaString: '25-30 mins',
  //         lastMileTravelString: '4.0 km',
  //         iconType: 'ICON_TYPE_EMPTY',
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: '636724',
  //       name: 'Thai Wok',
  //       cloudinaryImageId: 'e0839ff574213e6f35b3899ebf1fc597',
  //       cuisines: ['Chinese', 'Asian', 'Tibetan', 'Desserts'],
  //       avgRating: 3.9,
  //       parentId: '61955',
  //       avgRatingString: '4.3',
  //       totalRatingsString: '1.7K+',
  //       sla: {
  //         deliveryTime: 29,
  //         lastMileTravel: 4,
  //         serviceability: 'SERVICEABLE',
  //         slaString: '25-30 mins',
  //         lastMileTravelString: '4.0 km',
  //         iconType: 'ICON_TYPE_EMPTY',
  //       },
  //     },
  //   },
  // ];

  const filterHandler = () => {
    setListOfRestaurants((prevList) =>
      prevList.filter((rest) => rest?.info?.avgRating > 4.3)
    );
    // listOfRestaurants = listOfRestaurants.filter(
    //   (rest) => rest?.info?.avgRating >= 4.3
    // );
    console.log(listOfRestaurants);
  };

  return (
    <div className="body">
      <Filter filterHandler={filterHandler} />
      <RestaurantContainer resList={listOfRestaurants} />
    </div>
  );
};

export default Body;
