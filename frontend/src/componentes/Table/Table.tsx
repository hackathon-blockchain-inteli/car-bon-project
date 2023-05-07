import styles from './Table.module.scss'

interface TableProps {
  data: TableData[];
}
interface TableData {
  column1: string;
  column2: string;
  column3: string;
  column4: string;
  column5: string;
}

const Table = ({ data }: TableProps) => {
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
      {data.map((rowData, index) => (
          <tr key={index}>
            <td>{rowData.column1}</td>
            <td>{rowData.column2}</td>
            <td>{rowData.column3}</td>
            <td>{rowData.column4}</td>
            <td>{rowData.column5}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;