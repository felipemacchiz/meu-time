import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserStorage } from './UserContext';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Components/Login/Login';
import Conta from './Components/Conta/Conta';
import Season from './Components/Season/Season';
import ProtectedRoute from './Components/Helper/ProtectedRoute';

const App = () => {
  return (
      <>
        <BrowserRouter>
          <UserStorage>
            <Header/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="login/*" element={<Login/>} />
              <Route 
                path="conta/*" 
                element={
                  <ProtectedRoute>
                    <Conta/>
                  </ProtectedRoute>
                } 
              />
              <Route path="liga/:league/:season/*" element={<Season/>}/>
            </Routes>
            <Footer/>
          </UserStorage>
        </BrowserRouter>
      </>
    );
};

export default App;
