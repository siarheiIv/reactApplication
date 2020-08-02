import React from 'react';
import ReactDOM from 'react-dom';

const createdElement = React.createElement(
    "h4",
    { style: { backgroundColor: "green" } },
    "Hello!"
  );
const root = document.getElementById('root');

ReactDOM.render(createdElement, root);