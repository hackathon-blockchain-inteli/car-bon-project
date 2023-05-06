import React from 'react';
import styles from "./Transparency.module.scss";
import Table from '../../componentes/Table/Table';
import NavBar from '../../componentes/NavBar/NavBar';
import FootBar from '../../componentes/FootBar/FootBar';


const data = [
    { id: 1, coluna1: '11/02/23 , 12:31:43', coluna2: 'Purchase', coluna3: '76gybuh7g87g8ghkjbjkbhhkj', coluna4: 'Repository', coluna5: 'Value ($)' },
    { id: 2, coluna1: '11/02/23 , 12:31:43', coluna2: 'Purchase', coluna3: '76gybuh7g87g8ghkjbjkbhhkj', coluna4: 'Repository', coluna5: 'Value ($)' },
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
            <Table data={data} />
          </div>
      </div>
      <FootBar />
    </div>
  );
}

export default Transparency;