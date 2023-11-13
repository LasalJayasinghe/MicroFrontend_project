import React from 'react';


const AttendanceGraph = ({ data }) => {
  const getMaxAttendance = () => {
    return Math.max.apply(Math, data.map((item) => item.attendance));
  };

  const getBarWidth = () => {
    return 40;
  };

  const getBarHeight = (attendance) => {
    return (attendance * 200) / getMaxAttendance();
  };

  const renderBars = () => {
    return data.map((item) => {
      const barWidth = getBarWidth();
      const barHeight = getBarHeight(item.attendance);

      return (
        <div key={item.month} style={{ width: barWidth, height: barHeight, backgroundColor: '#0000FF' }}>
        </div>
      );
    });
  };

  const renderXAxis = () => {
    return data.map((item) => {
      const xPosition = (getBarWidth()+10) * data.indexOf(item);

      return (
        <div key={item.month} style={{ position: 'absolute', top: 20, left: xPosition, margin: '0 40px' ,   fontSize: '14px'   }}>
        {item.month}
        </div>
      );
    });
  };

  const renderYAxis = () => {
    const yAxisValues = [];
    for (let i = 0; i <= getMaxAttendance(); i += 100) {
      const yPosition = (200 * (getMaxAttendance() - i)) / getMaxAttendance();
      yAxisValues.push(
        <div key={i} style={{ position: 'absolute', top: yPosition, left: -40 }}>
          {i}
        </div>
      );
    }
  
    return yAxisValues;
  };
  

  return (
    <div className="attendance-graph">
      <h2 style={{textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>Attendance Graph</h2>
      <div className="bars">{renderBars()}</div>
      <div className="x-axis">{renderXAxis()}</div>
      <div className="y-axis">{renderYAxis()}</div>
    </div>
  );
};

export default AttendanceGraph;
