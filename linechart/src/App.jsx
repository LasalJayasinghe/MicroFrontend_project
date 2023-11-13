import React from "react";
import ReactDOM from "react-dom";
import  Line  from 'react-chartjs-2'; 
import 'chart.js/auto';
import "./index.scss";

 // Line chart data for multiple students
 const studentData = {
  labels: ['First Sem', 'Second Sem', 'Third Sem', 'Fourth Sem'],
  datasets: [
    {
      label: 'Student 1',
      data: [3.78, 3.68, 2.89, 3.72],
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 2,
      fill: false,
    },
    {
      label: 'Student 2',
      data: [3.1, 3.3, 3.89, 1.72],
      borderColor: 'rgb(100, 100, 192)',
      borderWidth: 2,
      fill: false,
    },
  ],
};

const chartOptions = {
  scales: {
    x: {
      title: {
        display: true,
        text: 'Semesters',
      },
    },
    y: {
      title: {
        display: true,
        text: 'GPA',
      },
    },
  },
};
const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: linechart</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>

    <div className="attendance-graph">
      <h2 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>GPA Structure</h2>
    <Line data={studentData } />
    </div>


  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
