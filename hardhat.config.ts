import * as dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {extendEnvironment, HardhatUserConfig, task} from 'hardhat/config';

import '@nomicfoundation/hardhat-chai-matchers';
import '@matterlabs/hardhat-zksync-deploy';
import '@matterlabs/hardhat-zksync-solc';
import '@matterlabs/hardhat-zksync-node';
import 'hardhat-deploy';


// If you're running on zksync, import the below
// import '@matterlabs/hardhat-zksync-upgradable';
// import '@matterlabs/hardhat-zksync-ethers';
// import '@matterlabs/hardhat-zksync-verify';

// import '@nomicfoundation/hardhat-verify'
// import '@openzeppelin/hardhat-upgrades'

dotenv.config();

const config: HardhatUserConfig = {
  zksolc: {
    version: "1.4.0", // Uses latest available in https://github.com/matter-labs/zksolc-bin/
    compilerSource: 'binary',
    settings: {},
  },
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 2000,
      },
      outputSelection: {
        "*": {
          "*": ["storageLayout"],
        },
      },
    },
  },
  defaultNetwork: "zkSyncLocal",
  networks: {
    hardhat: {
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,
      blockGasLimit: 3000000000, // really high to test some things that are only possible with a higher block gas limit
      gasPrice: 80000000000,
      allowUnlimitedContractSize: true,
      // deploy: ["./deploy"],
      // zksync: true
    },
    zkSyncLocal: {
      url: "http://127.0.0.1:8011",
      ethNetwork: "http://127.0.0.1:8545",
      zksync: true,
      accounts: [
        // This is the rich account that already has lots of funds on the chain of port 8545
        '0x3d3cbc973389cb26f657686445bcc75662b415b656078503592ac8c1abb8810e',
        // '0xac1e735be8536c6534bb4f17f06f6afc73b2b5ba84ac2cfb12f7461b20c0bbe3'
      ],
    },
    // zkTestnet: {
    //   url: 'https://sepolia.era.zksync.dev',
    //   ethNetwork: 'sepolia',
    //   zksync: true,
    //   verifyURL:
    //     'https://explorer.sepolia.era.zksync.dev/contract_verification',
    //   deploy: ['./deploy/new', './deploy/verification'],
    //   accounts: ['0xf8880c7e20013925e5cd4ebb440de9120aabab51e7fef5f0e23e169b53196310'],
    //   forceDeploy: true,
    // },
    // zkMainnet: {
    //   url: 'https://mainnet.era.zksync.io',
    //   ethNetwork: 'mainnet',
    //   zksync: true,
    //   verifyURL:
    //     'https://zksync2-mainnet-explorer.zksync.io/contract_verification',
    //   deploy: ['./deploy/new', './deploy/verification'],
    //   accounts: ['0xf8880c7e20013925e5cd4ebb440de9120aabab51e7fef5f0e23e169b53196310'],
    //   forceDeploy: true,
    // },
    holesky: {
      chainId: 17000,
      url: "https://holesky.infura.io/v3/7a03fcb37be7479da06f92c5117afd47",
      deploy: ["./deploy/new", "./deploy/verification"],
      accounts: ['0xf8880c7e20013925e5cd4ebb440de9120aabab51e7fef5f0e23e169b53196310'],
    },
    sepolia: {
      chainId: 11155111,
      url: "https://sepolia.infura.io/v3/7a03fcb37be7479da06f92c5117afd47",
      accounts: ['0xf8880c7e20013925e5cd4ebb440de9120aabab51e7fef5f0e23e169b53196310'],
    },
    mainnet: {
      chainId: 1,
      url: "https://mainnet.infura.io/v3/7a03fcb37be7479da06f92c5117afd47",
      accounts: ['0xf8880c7e20013925e5cd4ebb440de9120aabab51e7fef5f0e23e169b53196310'],
    },
    polygon: {
      url: "https://polygon-mainnet.infura.io/v3/7a03fcb37be7479da06f92c5117afd47",
      chainId: 137,
      accounts: ['0xf8880c7e20013925e5cd4ebb440de9120aabab51e7fef5f0e23e169b53196310'],
    },
    baseMainnet: {
      url: "https://base-mainnet.infura.io/v3/481a4cdc7c774286b8627f21c6827f48",
      chainId: 8453,
      accounts: ['0xf8880c7e20013925e5cd4ebb440de9120aabab51e7fef5f0e23e169b53196310'],
    },
    arbitrum: {
      url: "https://arbitrum-mainnet.infura.io/v3/7a03fcb37be7479da06f92c5117afd47",
      chainId: 42161,
      accounts: ['0xf8880c7e20013925e5cd4ebb440de9120aabab51e7fef5f0e23e169b53196310'],
    }
  },
  namedAccounts: {
    deployer: 0,
  },
  paths: {
    sources: "./src",
    tests: "./test",
    cache: "./build/cache",
    artifacts: "./build/artifacts",
    deploy: "./deploy",
  },
  mocha: {
    timeout: 500_000, // 90 seconds // increase the timeout for subdomain validation tests
  },
};

export default config;
