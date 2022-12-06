import React from 'react';

// Router
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import BookPage from './pages/BookPage';
import CarsPage from './pages/CarsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <main>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/book' element={<BookPage />} />
        <Route path='/cars' element={<CarsPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>

    </main>
  )
}

export default App;