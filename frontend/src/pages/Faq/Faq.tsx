import React from 'react';
import styles from "./Faq.module.scss";
import NavBar from '../../componentes/NavBar/NavBar';
import FootBar from '../../componentes/FootBar/FootBar';


const Faq: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <div><h1>All about BTG dol</h1></div>
        <div className={styles.cardlist} >
            <h2>What is a <span>stablecoin?</span></h2>
            <p>Stablecoins are generally cryptocurrencies designed to maintain a stable value relative to a particular fiat currency, such as the US dollar. Unlike other cryptocurrencies that are known for their volatility, stablecoins are designed to be stable and predictable in their market value. Each stablecoin token represents one unit of that currency. Additionally, stablecoins can also be used for fast and cheap value transfers, without the fees and limitations associated with traditional fiat currency transfers.</p>
        </div>
        <div className={styles.cardlist} >
            <h2><span>What</span> is BTG dol?</h2>
            <p>BTG dol is a Stablecoin created by Mynt, a subsidiary of BTG Pactual, and is backed by the US dollar. This means that one BTG dol token is equivalent to 1 US dollar, always.</p>
        </div>
        <div className={styles.cardlist} >
            <h2><span>Why</span> use BTG dol?</h2>
            <p>BTG dol combines the stability and predictability of the US dollar's value with the ease of quickly entering and exiting the crypto market for the traditional market, all of which are backed by multiple layers of security and reliability provided by the bank - something uncommon in the crypto market.</p>
        </div>
        <div className={styles.cardlist} >
            <h2><span>How</span> to claim your BTG dol?</h2>
            <p>First, you need to add the Metamask extension to your browser. Metamask is available for Chrome, Firefox, Brave, and Edge. After installing the extension, click on the Metamask icon on your browser's toolbar. Then, click on "Get Started" and choose "Create a Wallet". Once you have created your account, you will see a recovery phrase composed of 12 words. Write down these words in a secure place. Now, you need to connect your wallet to a network. Select the desired network and click on "Next". Congratulations! You have successfully created a wallet on Metamask.</p>
        </div>
      </div>
      <FootBar />
    </div>
  );
}

export default Faq;