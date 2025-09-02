import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { DataProvider } from './contexts/DataContext';
import { Portfolio } from './components/portfolio/Portfolio';
import { ProjectDetail } from './components/portfolio/ProjectDetail';
import { Login } from './components/admin/Login';
import { Dashboard } from './components/admin/Dashboard';
import { isAuthenticated } from './utils/storage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <ThemeProvider>
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route
              path="/admin"
              element={
                isLoggedIn ? (
                  <Dashboard onLogout={handleLogout} />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;