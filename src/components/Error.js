import { useRouteError } from 'react-router-dom';

// Error component
const Error = () => {
  const err = useRouteError();
  console.error(err);

  return (
    <div className="error">
      <h1>Oops! Something went wrong 😬</h1>
      <h2>{err.error.message}</h2>
    </div>
  );
};

export default Error;
