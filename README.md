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
export DB_HOST=<secret> 
export DB_NAME=<secret> 
export DB_USER=<secret> 
export ADMIN_USER=<admin_user>
export ADMIN_PASSWORD=<admin_pass>

export BSC_CHAIN_ID=97
export BSC_START_BLOCK=16780309
export ETH_CHAIN_ID=42
export ETH_START_BLOCK=29835039
export POLYGON_CHAIN_ID=80001
export POLYGON_START_BLOCK=24932906

export ETH_UPSTREAM=<rpc provider url> 
export POLYGON_UPSTREAM=<rpc provider url> 
export BSC_UPSTREAM=<rpc provider url> 
export TOKEN_ABI_FILENAME='erc721-abi.json'

# update addresses after deploy contracts
export ETH_TOKEN_ADDRESS="0x45c037263752F1d1F8cA94fAff339A0178C06EEb"
export ETH_BRIDGE_ADDRESS="0xBa32a080612eA433FD64F4C5c99c73666149e997"
export BSC_TOKEN_ADDRESS="0xe6847645B1832B2923e5938ec482f2b0EfA6DE4c"
export BSC_BRIDGE_ADDRESS="0x099e3307be3b694e8C7dBc54E2ecB8897806BD2A"
export POLYGON_TOKEN_ADDRESS="0xc303c254529542bfCbCCE275Bb8c819fD8fFdb03"
export POLYGON_BRIDGE_ADDRESS="0xF6C9DaF74f99388c2C666b0468a9f1D1601c0013"

export REACT_APP_API_HOST='https://onbridge.io/api'

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
