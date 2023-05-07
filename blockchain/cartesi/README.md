## CarBon AI

CarBon AI generate prediction of a month and year of a carbon emission based on the data of the last 7 days using AI on [SVM Model](https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVR.html) and [Cartesi Machine](https://docs.cartesi.io/machine/intro/)

More about of AI dataset generator or the AI model, see the [AI README](./AI/README.md)

# About CarBon AI using Cartesi Machine

### For Development and deployment of a Cartesi Machine on Polygon Mumbai - Setup environment:

### variables:

```shell
export NETWORK = mumbai
export MNEMONIC = <user sequence of twelve words>
export RPC_URL = <https://your.rpc.gateway>
export WSS_URL = <wss://your.wss.gateway>
```

The RPC_URL is the gateway to the blockchain network you want to deploy the contracts. In this project, needs to be a Polygon Mumbai RPC gateway from [Alchemy](https://www.alchemy.com/).

Remembering that it is necessary has some MATIC in the wallet to pay the gas fees. You can get some MATIC from [Polygon Faucet](https://faucet.matic.network/).

### Dependencies:

-   [Docker and Docker Compose](https://docs.docker.com/engine/install/) installed and configured.
-   [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) installed and configured to use in command line tests ( if you want to use the frontend-console to interact with the contract ).

## Deploy contracts:

#### To build docker images of the cartesi

```shell
$ docker buildx bake -f docker-bake.hcl -f docker-bake.override.hcl --load
```

#### and

```shell
$ docker buildx bake -f docker-bake.hcl -f docker-bake.override.hcl machine --load
```

---

#### To deploy contracts on [Polygon Mumbai](https://mumbai.polygonscan.com/):

#### Run the docker compose command below to deploy the contracts and generate the file `deployments/polygon_mumbai/carbon_ia.json` with the contract address:

```shell
$ DAPP_NAME=carbon_ia docker compose --env-file ./env.polygon_mumbai -f ./deploy-testnet.yml up
```

#### Now, to run a node from the contract deployed on Polygon Mumbai, run the docker compose command to start the node from the contract address generated in the previous step:

```shell
$ DAPP_NAME=carbon_ia docker compose --env-file ./env.polygon_mumbai -f ./docker-compose-testnet.yml -f ./docker-compose.override.yml up
```

---

### Interact with deployed contract on [frontend-console](https://github.com/cartesi/rollups-examples/tree/main/frontend-console):

#### Send payloads to advance the state of the cartesi machine nodes:

```shell
$ yarn start input send --payload <json_payload> --addressFile deployments/polygon_mumbai/carbon_ia.json
```

Example:
Using base values of week 20,33,44,55,21,50,40...

```shell
$ yarn start input send --payload '{"type":"prediction","week_list":[20,33,44,55,21,50,40],"contract_address":"0x72ac37F2B8685300a6B3781669a487eBb94a5CCd"}' --addressFile deployments/polygon_mumbai/carbon_ia.json
```

#### Read the noticies list from the cartesi machine:

```shell
$ yarn start notice list
```
