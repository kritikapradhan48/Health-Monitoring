import React from 'react';
import Dashboard from './components/Dashboard';
import HealthForm from './components/HealthForm';

function App() {
  return (
    <div className="App">
      <h1>Health Monitoring App</h1>
      <HealthForm />
      <Dashboard />
    </div>
  );
}

export default App;
