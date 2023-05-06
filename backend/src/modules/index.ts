import Module from './base';

import MQTT from './mqtt';
import Ethers from './ethers';

export default class ModuleManager {
	private modules: Module[];

	constructor() {
		this.modules = [];
	}

	public addModule(module: Module): void {
		this.modules.push(module);
	}

	public init(): void {
		this.modules.forEach((module) => {
			module.init();
		});
	}

	public destroy(): void {
		this.modules.forEach((module) => {
			module.destroy();
		});
	}
}

export { MQTT, Ethers };
