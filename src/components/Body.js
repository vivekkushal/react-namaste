import Search from './Search';
import RestaurantContainer from './RestaurantContainer';

import resList from '../utils/data';

// Body component
const Body = () => {
  return (
    <div className="body">
      <Search />
      <RestaurantContainer resList={resList} />
    </div>
  );
};

export default Body;
