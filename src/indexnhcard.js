// sf-card/src/indexnhcard.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Assuming you have some global styles
import { openCardInNewTab } from './nhcard'; // Adjust the path according to your project structure

const App = () => (
  <div>
    <h1>Welcome to the React App</h1>
    <button onClick={openCardInNewTab}>Open Harihar Nagarajan Card</button>
  </div>
);

const container = document.getElementById('sample');
const root = createRoot(container);
root.render(<App />);