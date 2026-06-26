import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter, HashRouter } from 'react-router';
import { HomePage, CareerPage, ContactPage, ExperiencePage, GraduatePage, ProjectsPage } from '@/pages';
import { NavPanel } from "@/components";

const AppPortfolio = () => {
    return (
        <React.StrictMode>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/experience' element={<ExperiencePage />} />
                    <Route path='/graduate' element={<GraduatePage />} />
                    <Route path='/career' element={<CareerPage />} />
                    <Route path='/projects' element={<ProjectsPage />} />
                    <Route path='/contact' element={<ContactPage />} />
                </Routes>
            </HashRouter>
        </React.StrictMode>
    );
}

const root = window.document.documentElement;
root.classList.add('dark');

ReactDOM.createRoot(document.getElementById("root")!).render(<AppPortfolio />);