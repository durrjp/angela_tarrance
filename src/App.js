import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ApplicationViews from './components/ApplicationViews';
import UserProvider from './providers/UserProvider';
import HomeProvider from './providers/HomeProvider';

export default function App() {
  return (
    <main className="App">
      <Router>
        <UserProvider>
          <HomeProvider>
            <ApplicationViews />
          </HomeProvider>
        </UserProvider>
      </Router>
    </main>
  );
}

