import React from 'react';
import styles from "./Cars.module.scss";
import NavBar from '../../componentes/NavBar/NavBar';
import FootBar from '../../componentes/FootBar/FootBar';
import { GrAddCircle } from 'react-icons/gr';
import { useState } from 'react';
import { ethers } from "ethers";
import { toast } from 'react-toastify';
import axios from 'axios';

// Conectar o usuario ao metamask na rede mumbai

const BlockchainIntegration = {
  connectToMetamask: async () => {
    if (window.ethereum) {
      try {
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        })
        const mumbaiNetwork = "0x13881"
        if (window.ethereum.chainId !== mumbaiNetwork) {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: mumbaiNetwork }],
          })
        }
        return res[0]

      } catch (err) {
        console.error(err)
      }
    } else {
      toast.error("Install MetaMask")
    }
  },
}

// Axios para puxar do banco as tabelas

axios.get('/api/tabela')
  .then(response => {
    const { datetime, type, value, hash, coppm } = response.data;
  })
  .catch(error => {
    console.error(error);
  });

// chama a função de um contrato

const Cars: React.FC = () => {
  const [account, setAccount] = useState('');

  const handleClick = async () => {
    const userAccount = await BlockchainIntegration.connectToMetamask();
    setAccount(userAccount);
  };

  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.yourCars}>
          <div className={styles.introCars}>
            <div>
              <h1>Your Cars</h1>
              <button><GrAddCircle size={24} /></button>
            </div>
            <span>
              <p>Current credits</p>
              <p>2.345 CT</p>
            </span>
          </div>
          <div className={styles.listCars}>
            <button onClick={handleClick}>Personal Car</button> {/*Puxar do banco */}
            {account && <p>Connected account: {account}</p>}
            <button>Work Car</button> {/*Puxar do banco */}
          </div>
        </div>
        <div className={styles.identifierCar}>
          <div>
            <h1>Personal Car</h1> {/*Puxar do banco */}
            <p>Last update on: 7/20/2020 at 4:10 PM</p> {/*Puxar do banco */}
          </div>
          <div className={styles.infoCredits}>
            <div>
              <p>Redeem credits</p>
              <span>2.345 CT</span>
            </div>
            <div>
              <p>Earned credits</p>
              <span>2.345 CT</span>
            </div>
            <div>
              <p>Last seen</p>
              <span>03/05/2023 - 13:40:22</span>
            </div>
          </div>
        </div>
        <div className={styles.infoDash}>
          <h1>Your Dashboard</h1>
          <div>
            <div className={styles.field}>
              <label>Week:</label>
              <input disabled placeholder="Puxar do banco"/>
            </div>
            <div className={styles.field}>
              <label>Month:</label>
              <input disabled placeholder="Puxar do banco"/>
            </div>
            <div className={styles.field}>
              <label>Year:</label>
              <input disabled placeholder="Puxar do banco"/>
            </div>
          </div>
        </div>
        <div className={styles.dashboardImg}>
          <img></img>
          <div>
            <h1>Value per Year</h1>
            <p>This is a prediction based on your latest patterns</p>
          </div>
        </div>
        <div className={styles.readingHistory}>
          <h1>Reading history</h1>
        </div>

      </div>
      <FootBar />
    </div>
  );
}

export default Cars;