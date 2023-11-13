import React from "react";
import  Line  from 'react-chartjs-2'; 
import 'chart.js/auto';

export default function LineChart({ studentData }) {
  return (
    <div className="attendance-graph">
      <h2 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>GPA Structure</h2>
    <Line data={studentData } />
    </div>
  );
}
