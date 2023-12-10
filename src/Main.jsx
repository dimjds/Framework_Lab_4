
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/screens/home/home.jsx';
import Layout from './components/layout/Layout.jsx';
import Footer from './components/screens/footer/Footer.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateTask from "./components/screens/home/createtask/CreateTask.jsx";
import Header from "./components/screens/header/Header.jsx";
import CreateTaskRoute from "./components/screens/home/createtask/CreateTaskRoute.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Layout>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/CreateTask' element={<CreateTaskRoute/>}>
                    </Route>
                </Routes>
                <Footer/>
            </Layout>
        </BrowserRouter>
    </React.StrictMode>,
)
