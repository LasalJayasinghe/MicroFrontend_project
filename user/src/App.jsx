import React from "react";
import ReactDOM from "react-dom";
import Tree from "Tree/Tree";
import Graph from 'graph/graph';
// import Linechart from "linechart/linechart";
import User from './component/user'

import "./index.scss";

  // User Details
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1234567890',
  };

  const orgChart = {
    name: 'CEO',
    children: [
      {
        name: 'Manager',
        attributes: {
          department: 'Production',
        },
        children: [
          {
            name: 'Foreman',
            attributes: {
              department: 'Fabrication',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
          {
            name: 'Foreman',
            attributes: {
              department: 'Assembly',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
        ],
      },
    ],
  };

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
        // Add more students as needed
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
  
    const attendanceData = [
      { month: 'Jan', attendance: 190 },
      { month: 'Feb', attendance: 300 },
      { month: 'Mar', attendance: 400 },
      { month: 'Apr', attendance: 150 },
      { month: 'May', attendance: 160 },
      { month: 'Jun', attendance: 270 },
      { month: 'Jul', attendance: 270 },
    ];

    const App = () => (
      <div style={{ margin: '20px' }}>
      <h1 style={{ fontFamily: 'Lato, sans-serif', fontSize: '24px', textAlign: 'center' }}>User summary dashboard</h1>
      <div className="user-grid"></div>
      <div className="mt-10 text-3xl mx-auto max-w-6xl grid grid-cols-2 grid-rows-2 gap-4">
        <div className="row-span-2">
          <User user={user} />
        </div>
        <div>
          <Graph data={attendanceData} />
        </div>
        <div>
          <Tree data={orgChart} />
        </div>
        {/* <div>
          <Linechart data={studentData}  />
        </div> */}
      </div>
      </div>
    );
ReactDOM.render(<App />, document.getElementById("app"));
