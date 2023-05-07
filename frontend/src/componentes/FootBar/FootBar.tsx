import React from 'react';
import styles from "./FootBar.module.scss";

const FootBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topFooter}>
        <div className={styles.footerLogo}>
          <h1><span>Car</span>bon</h1>
          <p>Buy/Generate Offset Carbon tokens through Car's registrations</p>
        </div>
        <div className={styles.siteMap}>
          <h2>Sitemap</h2>
          <a href="/">Home</a>
          <a href="/exchange">Exchange Credits</a>
          <a href="/transparency">Transaction history</a>
          <a href="/cars">Cars</a>
          <a href="/">Transparency</a>
        </div>
        <div className={styles.footerButton}>
          <button>Be a part of <span>this</span></button>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <h3>©2023 - <span>Car</span>bon</h3>
      </div>
    </div>
  );
}

export default FootBar;