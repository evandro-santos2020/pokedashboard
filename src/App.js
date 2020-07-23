import React from 'react';
import Dashboard from './pages/Dashboard';
import './app.css';
import Header from './components/Header';
function App() {
  return (
    <>
    <Header/>
    <div className='App'>
      <Dashboard></Dashboard>
    </div>
    </>
  );
}

export default App;
