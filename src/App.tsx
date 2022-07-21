import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

import './App.css';
import IssuesViewerPage from './pages/IssuesViewer/IssuesViewer';
import SearchPage from './pages/Search/SearchPage';

export const APP_ROUTES = {
    HOME: '/',
    ISSUES_VIEWER: '/viewer/:repoOwner/:repoName'
}

function App() {
    return (
        <main className='main-container'>
            <Router>
                <Routes>
                    <Route path={APP_ROUTES.HOME} element={<SearchPage />} />
                    <Route path={APP_ROUTES.ISSUES_VIEWER} element={<IssuesViewerPage />} />
                </Routes>
            </Router>
        </main >
    );
}

export default App;
