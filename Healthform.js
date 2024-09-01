import React, { useState } from 'react';

function HealthForm() {
  const [formData, setFormData] = useState({
    userId: 'user123',  // Replace with actual userId
    heartRate: '',
    steps: '',
    sleepHours: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/healthdata', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => console.log('Health data submitted:', data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Heart Rate:</label>
        <input type="number" name="heartRate" value={formData.heartRate} onChange={handleChange} />
      </div>
      <div>
        <label>Steps:</label>
        <input type="number" name="steps" value={formData.steps} onChange={handleChange} />
      </div>
      <div>
        <label>Sleep Hours:</label>
        <input type="number" name="sleepHours" value={formData.sleepHours} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default HealthForm;
