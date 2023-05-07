import React from 'react';
import styles from './Exchange.module.scss';
import NavBar from '../../componentes/NavBar/NavBar';
import FootBar from '../../componentes/FootBar/FootBar';
import add from '../../assets/add.png';
import volvo from '../../assets/volvo.jpg';

function generateCard(id: number, tokens: number, wallet: string, img?: any) {
	return (
		<div>
			<img src={img ? img : volvo} alt="car" className={styles.carImg} />
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
					{generateCard(1, 100, '0x123456789', add)}
					{generateCard(2, 100, '0x123456789', volvo)}
				</div>
				<div className={styles.cardList}></div>
			</div>
			<FootBar />
		</div>
	);
};

export default Exchange;
