import React from "react";
import Tree from 'react-d3-tree';

export default function TreeComponent({ data }) {
  return (
        <div className="attendance-graph">
          <h2 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>Team Structure</h2>
          <Tree data={data} />
        </div>  );
}
