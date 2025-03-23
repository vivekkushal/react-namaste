import { useEffect, useState } from 'react';

import Filter from './Filter';
import RestaurantContainer from './RestaurantContainer';

// import resList from '../utils/data';

const url =
  'https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

// Body component
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
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

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
      setListOfRestaurants(
        (_) =>
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, []);

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
