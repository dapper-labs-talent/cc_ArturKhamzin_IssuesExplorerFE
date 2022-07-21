import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

if (!process.env.REACT_APP_GITHUB_SECRET) {
    throw new Error(`
        Please specify your Github token in .env file:
            - rename .env.sample to .env
            - populate REACT_APP_GITHUB_SECRET field with the token
            - restart app
    `);
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);
