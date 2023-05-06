import Module from './base';
import { ethers } from 'ethers';

import dotenv from 'dotenv';
dotenv.config();

const ALCHEMY_API_KEY = String(process.env.ALCHEMY_API_KEY);
const PRIVATE_KEY = String(process.env.PRIVATE_KEY);
const CHAIN_ID = 5; // Chain ID for Goerli testnet

class Contract {
	private contract: ethers.Contract;
	private provider: ethers.Provider;

	constructor(address: string, abi: string, provider: ethers.Provider) {
		this.contract = new ethers.Contract(address, abi, ethers.getDefaultProvider('goerli'));
		this.provider = provider;
	}

	public getContract(): ethers.Contract {
		return this.contract;
	}

	public getProvider(): ethers.Provider {
		return this.provider;
	}

	public static importABI(contract_name: string): string {
		return require(`../../artifacts/${contract_name}.json`).abi;
	}
}

export default class Ethers extends Module {
	private provider!: ethers.AlchemyProvider;
	private wallet!: ethers.Wallet;
	private connected_wallet!: ethers.Wallet;

	constructor() {
		super('Ethers');
	}

	public async init(): Promise<void> {
		this.provider = new ethers.AlchemyProvider(CHAIN_ID, ALCHEMY_API_KEY);
		console.log(`[Ethers] Provider network: ${await (await this.provider.getNetwork()).name}`);

		this.wallet = new ethers.Wallet(PRIVATE_KEY, this.provider).connect(this.provider);
		console.log(`[Ethers] Wallet address: ${this.wallet.address}`);
		console.log(`[Ethers] Balance on ${await (await this.provider.getNetwork()).name}: ${await this.getBalance(this.wallet.address)}`);
	}

	public async destroy(): Promise<void> {
		// Nothing to do here
	}

	public async getBalance(address: string): Promise<string> {
		const balance = await this.provider.getBalance(address);
		return balance.toString();
	}

	public async getTransaction(transactionHash: string): Promise<ethers.TransactionResponse | null> {
		return await this.provider.getTransaction(transactionHash);
	}

	public async getTransactionReceipt(transactionHash: string): Promise<ethers.TransactionReceipt | null> {
		return await this.provider.getTransactionReceipt(transactionHash);
	}

	public async getContract(address: string, abi: string): Promise<Contract> {
		return new Contract(address, abi, this.provider);
	}
}

// Class of the CarbonToken contract
export class CarbonTokenContract extends Contract {
	constructor(address: string, provider: ethers.Provider) {
		super(address, Contract.importABI('CarbonToken'), provider);
	}

	public async getBalance(address: string): Promise<string> {
		return await this.getContract().balanceOf(address);
	}

	public async mint(address: string, amount: string): Promise<ethers.ContractTransaction> {
		return await this.getContract().mint(address, amount);
	}

	public async decimals(): Promise<number> {
		return await this.getContract().decimals();
	}
}
