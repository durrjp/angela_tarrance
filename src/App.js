import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ApplicationViews from './components/ApplicationViews';
import Header from './components/header/Header';
import UserProvider from './providers/UserProvider';

export default function App() {
  return (
    <main className="App">
      <Router>
        <UserProvider>
          <ApplicationViews />
        </UserProvider>
      </Router>
    </main>
  );
}

