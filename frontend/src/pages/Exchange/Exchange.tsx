import React from 'react';
import styles from "./Exchange.module.scss";
import NavBar from '../../componentes/NavBar/NavBar';
import FootBar from '../../componentes/FootBar/FootBar';
import tst from '../../assets/tst.png';

const Exchange: React.FC = () => {
  return (
    <div>
        <NavBar />
        <div className={styles.container}>
            <div className={styles.intro}>
                <h1>Exchange</h1>
                <div>Token's value: 100 BTG dol</div>
            </div>
            <div className={styles.cardList}>
                <div>
                    <img src={tst}></img>
                    <div>
                        <p><span>Car id: </span>786867</p>
                        <p><span>Tokens: </span>24</p>
                        <p><span>Wallet adress: </span>gkfjdhsk67r5bjijnjk6fg</p>
                    </div>
                    <button>Buy Tokens</button>
                </div>
                <div>
                    <img src={tst}></img>
                    <div>
                        <p><span>Car id: </span>786867</p>
                        <p><span>Tokens: </span>24</p>
                        <p><span>Wallet adress: </span>gkfjdhsk67r5bjijnjk6fg</p>
                    </div>
                    <button>Buy Tokens</button>
                </div>
            </div>
        </div>
        <FootBar />
    </div>
  );
}

export default Exchange;