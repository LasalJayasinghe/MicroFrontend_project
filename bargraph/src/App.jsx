import React from "react";
import ReactDOM from "react-dom";
import Graph from './graph'
import "./index.scss";

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
  <>
        <Graph data={attendanceData} />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
