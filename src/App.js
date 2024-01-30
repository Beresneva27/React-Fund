import React, { useEffect, useMemo, useState } from 'react';
import './styles/App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/UI/AppRouter';
import { AuthContext } from './context';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    } else {
      setIsAuth(false)
    }
    setLoading(false);
  }, [])

  return (
    <AuthContext.Provider value={{
        isAuth,
        setIsAuth,
        isLoading
    }}>
      <BrowserRouter>
          <Navbar/>
          <AppRouter />
    </BrowserRouter>
    </AuthContext.Provider>
    
  )
}
export default App;
