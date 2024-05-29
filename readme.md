# Decentralized Escrow Application

This is an Escrow Dapp built with [Hardhat](https://hardhat.org/).

## Project Layout

There are three top-level folders:

1. `/app` - contains the front-end application
2. `/contracts` - contains the solidity contract
3. `/tests` - contains tests for the solidity contract

## Setup

Install dependencies in the top-level directory with `npm install`.

After you have installed hardhat locally, you can use commands to test and compile the contracts, among other things. To learn more about these commands run `npx hardhat help`.

Compile the contracts using `npx hardhat compile`. The artifacts will be placed in the `/app` folder, which will make it available to the front-end. This path configuration can be found in the `hardhat.config.js` file.

## Front-End

`cd` into the `/app` directory and run `npm install`

To run the front-end application run `npm start` from the `/app` directory. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## How to deploy in live testnetwork
- Create a RPC URL in any of the providers like alchemy. 
- Save the RPC URI and wallet private key in `.env` file
- run `npx hardhat run ./scripts/deploy.js --network [NETWORK_NAME]`

Network need to be configured in the `hardhat.config.js`

`.env` example:

```
TESTNET_RPC_URL_SEPOLIA=""
TESTNET_PRIVATE_KEY=""
```

## Tasks done

✔️ Ether Conversion <br>
✔️ Live Network deployment<br>
✔️ Styling

Example contract deployed at `0x984A8145886F336ea3cF6da1E4BF63e42Db52C93` in Ethereum Sepolia
SEPOLIA :