import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = (
  <h1 id="heading" tabIndex="5">
    Namaste React from JSX 🚀
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
