import React from 'react';
import styles from './Table.module.scss'

const Table: React.FC = ({ data }) => {
  return (
    <table className={styles.table}>
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
}

export default Table;