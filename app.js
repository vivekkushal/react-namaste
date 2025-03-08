import React from 'react';
import ReactDOM from 'react-dom/client';

// React element
const Title = () => (
  <h1 id="title" tabIndex="5">
    Namaste React from JSX 🚀
  </h1>
);

// React functional component
const HeadingComponent = () => (
  <h1 id="heading-component" tabIndex="6">
    <Title />
    <Title></Title>
    {Title()}
    Namaste React from Functional Component 🚀
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);
