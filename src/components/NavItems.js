import { useState } from 'react';
import { Link } from 'react-router-dom';

// NavItems component
const NavItems = () => {
  const [isLogin, setIsLogin] = useState(false);

  const loginHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div className="nav-items">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>Cart</li>
        <button className="auth-btn" onClick={loginHandler}>
          {isLogin ? 'Logout' : 'Login'}
        </button>
      </ul>
    </div>
  );
};

export default NavItems;
