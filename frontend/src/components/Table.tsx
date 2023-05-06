import React from 'react';
import './table.scss';

const Table = ({ data }) => {
  return (
    <table className="table">
    <thead>
      <tr>
        <th>Date/Time</th>
        <th>Type</th>
        <th>Hash</th>
        <th>Repository</th>
        <th>Value ($)</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row) => (
        <tr key={row.id}>
          <td>{row.coluna1}</td>
          <td>{row.coluna2}</td>
          <td>{row.coluna3}</td>
          <td>{row.coluna4}</td>
          <td>{row.coluna5}</td>
        </tr>
      ))}
    </tbody>
  </table>

  );
};

export default Table;