import React from 'react';
import styles from "./Exchange.module.scss";
import NavBar from '../../componentes/NavBar/NavBar';
import FootBar from '../../componentes/FootBar/FootBar';

const Exchange: React.FC = () => {
  return (
    <div>
        <NavBar />
        <div className={styles.container}>
        <div className={styles.start}>
            <div>
                <h1 className={styles.h1}>Exchange</h1>
            </div>
            <div className={styles.btgDol}>
                <h3 className={styles.wordsbtg}>Token's value: 100 BTG dol</h3>
            </div>
        </div>

        <div className={styles.allcards}>
        <div className={styles.cards}>
            <div className={styles.onecard}>
            <div className={styles.image}>
            </div>
            <div className={styles.line}></div>
            <div className={styles.specific}>
                    <div>
                        <p>Car ID:47538</p>
                    </div>
                    <div>
                        <p>Token:24</p>
                    </div>
                </div>
                <div>
                    <p>Wallet Adress:gkfjdhsk67r5bjijnjk6fg</p>
                </div>
                    <button className={styles.button}>Buy tokens</button>
            </div>

            <div className={styles.onecard}>
            <div className={styles.image}>
            </div>
            <div className={styles.line}></div>
            <div className={styles.specific}>
                    <div>
                        <p>Car ID:436574</p>
                    </div>
                    <div>
                        <p>Token:24</p>
                    </div>
                </div>
                <div>
                    <p>Wallet Adress: gkfjdhsk67r5bjijnjk6fg</p>
                </div>
                <button className={styles.button}>Buy tokens</button>
            </div> 
        </div>

        <div className={styles.cards}>
            <div className={styles.onecard}>
            <div className={styles.image}>
            </div>
            <div className={styles.line}></div>
            <div className={styles.specific}>
                    <div>
                        <p>Car ID:74837</p>
                    </div>
                    <div>
                        <p>Token:24</p>
                    </div>
                </div>
                <div>
                    <p>Wallet Adress: gkfjdhsk67r5bjijnjk6fg</p>
                </div>
                <button className={styles.button}>Buy tokens</button>
            </div>

            <div className={styles.onecard}>
            <div className={styles.image}>
            </div>
            <div className={styles.line}></div>
            <div className={styles.specific}>
                    <div>
                        <p>Car ID:123445</p>
                    </div>
                    <div>
                        <p>Token:24</p>
                    </div>
                </div>
                <div>
                    <p>Wallet Adress: gkfjdhsk67r5bjijnjk6fg</p>
                </div>
                <button className={styles.button}>Buy tokens</button>
            </div> 
        </div>

        </div>
        </div>
        <FootBar />
    </div>
  );
}

export default Exchange;