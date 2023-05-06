import express, { Express } from 'express';
import ModuleManager, { MQTT, Ethers } from './modules';

import dotenv from 'dotenv';
dotenv.config();

// Constants for server
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

// Create Express app instance
const app: Express = express();

// Create ModuleManager instance and add modules
const moduleManager: ModuleManager = new ModuleManager();

const mqttModule: MQTT = new MQTT();
moduleManager.addModule(mqttModule);

const ethersModule: Ethers = new Ethers();
moduleManager.addModule(ethersModule);

// Init all modules
moduleManager.init();

// Middleware for parsing JSON request body
app.use(express.json());

// Start server, the "+" is to convert the string to a number ( Trick to avoid type errors )
// You can find more info about this here: https://stackoverflow.com/questions/14667713/how-to-convert-a-string-to-number-in-typescript
app.listen(+PORT, HOST, () => {
	console.log(`Server running on http://${HOST}:${PORT}`);

	mqttModule.addTopic('0x72ac37F2B8685300a6B3781669a487eBb94a5CCd'); // Add topic for contract address (test contract)
	mqttModule.setCallback((topic, payload) => {
		console.log(`[MQTT] Message received on topic ${topic}: ${payload.toString()}`);
	});
});
