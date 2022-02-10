# NFT bridge for advanced GameFi mechanics

[OnBridge.io](https://onbridge.io/) is open and trusted framework for bridging NFTs across various metaverses, chains and GameFi DApps!

## History

* October 2021: Early prototype of the bridge was built on [BSC Gamefi Hackathon](https://hidorahacks.medium.com/application-guide-bsc-gamefi-hackathon-russia-eastern-europe-dc173c9250e9) and ranked 1st. [Hackerlink](https://hackerlink.io/buidl/1606?roundProj=1184)

* November 2021: Got $10K of DoraHacks community donations. Decided to spend these funds to integrate decentralized crosschain interop protocol (CIP).

* December 2021: Got 10K grant from Polygon. Integrated with deBridge CIP. 

* January 2022: Applied to the Most Valuable Builder acceleration program of Binance and elected as participant of [Wave-IV](https://twitter.com/BinanceChain/status/1485972580041433089).

* February 2022: Released v0.2.0-dbr-kovan-bsc - the first publicly available bridge with decentralized cross-chain interoperability layer under the hood. Operates between kovan and bsc testnets for custom ERC-721 of OnBridge.

## Build and run

```sh
export SECRET_KEY=<secret>  
export DB_PASSWORD=<secret>
export DB_HOST=<db>
export DB_NAME=<secret>
export DB_USER=<secret>
export ADMIN_USER=<admin_user>
export ADMIN_PASSWORD=<admin_pass>

export L1_CHAIN_ID=42
export L2_CHAIN_ID=97
export L1_START_BLOCK=29747207
export L2_START_BLOCK=16614491

# take from deployments
export L1_UPSTREAM="https://kovan.infura.io/v3/<YOUR_INFURA_KEY>"
export L1_TOKEN_ADDRESS="0xE003C1167eBb252e55F72Fb187452AD19595F39c"
export TOKEN_ABI_FILENAME='erc721-abi.json'
export L1_BRIDGE_ADDRESS="0x0b92C823Dca8bab789eF85a11e95A6C72bd4cB27"

export L2_UPSTREAM="https://data-seed-prebsc-1-s1.binance.org:8545/"
export L2_TOKEN_ADDRESS="0x0DB7AE37d37881DE3876E4b74a6D818F5e656d05"
export TOKEN_ABI_FILENAME='erc721-abi.json'
export L2_BRIDGE_ADDRESS="0x152d8e56cc7795bbD401331cb94D8b83fa6BA3BB"

export REACT_APP_API_HOST='https://api.onbridge.io/api'
export REACT_APP_L1_CHAIN_ID=42
export REACT_APP_L2_CHAIN_ID=97

DOCKER_HOST=ssh://root@<host> docker compose up -d --build --force-recreate
```

## Architecture

* **Contracts**: L1 bridge contract that receives and locks NFT on the origin network. L2 bridge contract that mints "twin" NFT on L2 net. 
To migrate L2 NFT back to origin network, L2 bridge burns L2 token and L1 bridge unlocks the original NFT. Stack: EVM, Solidity, hardhat.

* **Frontend DApp**: user initiates token operations (bridging from origin to L2 and back) using DApp UI build with awesome ReactJS, Ethers, Web3.

* **Indexing Engine**: API that provides useful information for UI: Overall statistics, token lists, events, transactions history and a lot of other stuff 
that improves quiality of life.

* **Oracles**: Decentralized algorithm that observes the contract states on L1 and L2 and replicates the changes and events between the networks. Includes consensus rules and incentivation of fair behavior.

[More details](https://github.com/Onbridge-io)

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
