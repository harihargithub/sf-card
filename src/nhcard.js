// sf-card/src/nhcard.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { renderToString } from 'react-dom/server';
import './addlcss.css';

// Define the HariharNagarajanCard component
// Updated HariharNagarajanCard component with new styling and action buttons
const HariharNagarajanCard = () => (
  <div className="e-card profile" style={{ justifyContent: 'flex-start' }}>
    <div className="e-card-header">
      <div className="e-card-header-image e-card-corner"></div>
    </div>
    <div className="e-card-header">
      <div className="e-card-header-caption center">
        <div className="e-card-header-title">Harihar Nagarajan</div>
        <div className="e-card-sub-title">Proprietor - Abjaja Enterprises</div>
      </div>
    </div>
    <div className="e-card-separator"></div>
    <div className="e-card-content"> Harihar holds a prestigious Certificate of Distinction in 'Advanced Full Stack Software Development' from IIT-Roorkee</div>
    <div className="e-card-actions center">
      <a href="mailto:nharihar1@gmail.com" className="e-card-btn" title="E-mail">
        <span className="e-mail-icon cb-icons"></span>
      </a>
      <a href="https://www.linkedin.com/in/harihar-nagarajan-452a6a1b/#" className="e-card-btn" title="LinkedIn">
        <span className="e-google-icon cb-icons"></span>
      </a>
      <a href="https://www.facebook.com/abjajaenterprises" className="e-card-btn" title="Facebook">
        <span className="e-fb-icon cb-icons"></span>
      </a>
      <a href="https://twitter.com/nharihar1" className="e-card-btn" title="Twitter">
        <span className="e-tweet-icon cb-icons"></span>
      </a>
    </div>
  </div>
);

// Function to open the card in a new tab
const openCardInNewTab = () => {
  const cardHtml = renderToString(<HariharNagarajanCard />);
  const newTab = window.open();
  newTab.document.open();
  // Use document.location.origin to get the base URL of the current document
  const baseUrl = document.location.origin;
  // Construct absolute paths for the CSS files
  newTab.document.write(`
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="${baseUrl}/addlcss.css">
        <!-- Include any other CSS files here -->
        <link rel="stylesheet" type="text/css" href="${baseUrl}/index.css">
      </head>
      <body>${cardHtml}</body>
    </html>
  `);
  newTab.document.close();
};

export { openCardInNewTab };