import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ApplicationViews from './components/ApplicationViews';

export default function App() {
  return (
    <Router>
      <ApplicationViews />
    </Router>
  );
}

