export default abstract class Module {
	constructor(name: string) {
		console.log(`[Module] ${name} loaded`);
	}

	abstract init(): void;

	abstract destroy(): void;
}
