import React from 'react';
import styles from './Exchange.module.scss';
import NavBar from '../../componentes/NavBar/NavBar';
import FootBar from '../../componentes/FootBar/FootBar';
import tst from '../../assets/tst.png';

function generateCard(id: number, tokens: number, wallet: string) {
	return (
		<div>
			<img src={tst}></img>
			<div>
				<p>
					<span>Car id: </span>
					{id}
				</p>
				<p>
					<span>Tokens: </span>
					{tokens}
				</p>
				<p>
					<span>Wallet adress: </span>
					{wallet}
				</p>
			</div>
			<button>Buy Tokens</button>
		</div>
	);
}

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
					{generateCard(1, 100, '0x123456789')}
					{generateCard(2, 100, '0x123456789')}
					{generateCard(3, 100, '0x123456789')}
				</div>
				<div className={styles.cardList}></div>
			</div>
			<FootBar />
		</div>
	);
};

export default Exchange;
