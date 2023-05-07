import React from 'react';
import styles from "./Transparency.module.scss";
import Table from '../../componentes/Table/Table';
import NavBar from '../../componentes/NavBar/NavBar';
import FootBar from '../../componentes/FootBar/FootBar';

const tableData = [
  { column1: "11/02/23 , 12:31:43", column2: "Purchase", column3: "76gybuh7g87g8ghkjbjkbhhkj", column4: "AXAJONX", column5: "$300" },
  { column1: "11/02/23 , 12:31:43", column2: "Purchase", column3: "999Guh7g87g8ghkjbjkb000J", column4: "BIHJKSSW", column5: "$300" },
];

const Transparency: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
          <div>
              <h1>Transactions History</h1>
              <h3>Token: 43290580834</h3>
          </div>
          <div className={styles.table}>
            <Table data={tableData} />
          </div>
      </div>
      <FootBar />
    </div>
  );
}

export default Transparency;