import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [healthData, setHealthData] = useState([]);

  useEffect(() => {
    fetch('/api/healthdata/user123')  // Replace 'user123' with actual userId
      .then(res => res.json())
      .then(data => setHealthData(data));
  }, []);

  return (
    <div>
      <h2>Health Data Dashboard</h2>
      <ul>
        {healthData.map((data, index) => (
          <li key={index}>
            Heart Rate: {data.heartRate}, Steps: {data.steps}, Sleep Hours: {data.sleepHours}, Date: {new Date(data.timestamp).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
