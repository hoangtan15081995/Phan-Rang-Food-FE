import React from 'react';
import './App.css';
import Router from './routes/Router';
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from './theme';

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

