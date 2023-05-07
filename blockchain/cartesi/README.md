Running the back-end in host mode:
docker buildx bake -f docker-bake.hcl -f docker-bake.override.hcl --load
docker compose -f docker-compose.yml -f docker-compose.override.yml -f docker-compose-host.yml up

Deploy:
docker buildx bake -f docker-bake.hcl -f docker-bake.override.hcl --load
docker buildx bake -f docker-bake.hcl -f docker-bake.override.hcl machine --load
DAPP_NAME=carbon_ia docker compose --env-file ./env.polygon_mumbai -f ./deploy-testnet.yml up
DAPP_NAME=carbon_ia docker compose --env-file ./env.polygon_mumbai -f ./docker-compose-testnet.yml -f ./docker-compose.override.yml up

ENV:
export NETWORK=mumbai
export MNEMONIC=<user sequence of twelve words>
export RPC_URL=<https://your.rpc.gateway>

Interact with deployed contract:
yarn start input send --payload "0x7b227765656b5f6c697374223a5b32302c32302c33302c34302c35302c36302c36305d2c22636f6e74726163745f61646472657373223a226f787465737465227d" --addressFile /home/vinicioslugli/Documentos/scripts/hackaton-blockchain-inteli/car-bon-project/blockchain/cartesi/deployments/polygon_mumbai/carbon_ia.json
