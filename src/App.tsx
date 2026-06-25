import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter, HashRouter } from 'react-router';
import { HomePage, AboutPage } from '@/pages';

const AppPortfolio = () => {
    return (
        <React.StrictMode>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
            </HashRouter>
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<AppPortfolio />);