import { useState } from 'react';

// NavItems component
const NavItems = () => {
  const [isLogin, setIsLogin] = useState(false);

  const loginHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
        <button className="auth-btn" onClick={loginHandler}>
          {isLogin ? 'Logout' : 'Login'}
        </button>
      </ul>
    </div>
  );
};

export default NavItems;
