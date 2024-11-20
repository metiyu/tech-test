import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from './pages/Counter';
import JavaScript from './pages/JavaScript';
import TabsFunction from './pages/TabsFunction';
import ModalPage from './pages/ModalPage';
import DataTables from './pages/DataTables';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <App /> */}
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}/>
                <Route path='/counter' element={<Counter />}/>
                <Route path='/javascript' element={<JavaScript />}/>
                <Route path='/tabs' element={<TabsFunction />}/>
                <Route path='/modal' element={<ModalPage />}/>
                <Route path='/data-tables' element={<DataTables />}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
