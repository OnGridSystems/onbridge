# NFT bridge for advanced GameFi mechanics

## About

This prototype WILL BE built during [BSC Gamefi Hackathon](https://hidorahacks.medium.com/application-guide-bsc-gamefi-hackathon-russia-eastern-europe-dc173c9250e9).

## Build and run

```sh
export UPSTREAM=https://rinkeby.infura.io/v3/<secret>
export TOKEN_ABI_FILENAME=erc721-abi.json
export TOKEN_ADDRESS=0x9d5eD1b12E2BB47E3bDdCC3638376B792b94530B
export DB_USER=api
export DB_PASSWORD=api
export DB_NAME=api
export ADMIN_USER=admin
export ADMIN_PASSWORD=admin

DOCKER_HOST=ssh://root@<host> docker compose up -d --build --force-recreate
```

## Progress

* 28.11.2021 - submitted hackathon [application](https://bscscan.com/tx/0x023b101e6d9888891aff07afc85ce6b3998601ebb23e68e4c5e385379dd97e9b). Waiting for approval and here we BUIDL!

## Architecture

* **Contracts**: L1 bridge contract that receives and locks NFT on the origin network. L2 bridge contract that mints "twin" NFT on L2 net. 
To migrate L2 NFT back to origin network, L2 bridge burns L2 token and L1 bridge unlocks the original NFT. Stack: EVM, Solidity, hardhat.

* **Frontend DApp**: user initiates token operations (bridging from origin to L2 and back) using DApp UI build with awesome ReactJS, Ethers, Web3.

* **Indexing Engine**: API that provides useful information for UI: Overall statistics, token lists, events, transactions history and a lot of other stuff 
that improves quiality of life.

* **Oracles**: Decentralized algorithm that observes the contract states on L1 and L2 and replicates the changes and events between the networks. Includes consensus rules and incentivation of fair behavior.

## License

```
OnBridge - NFT bridge for advanced GameFi mechanics
Copyright (C) 2021 OnBridge.IO

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
```
