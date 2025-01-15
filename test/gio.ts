import hre, { ethers, network } from 'hardhat';
import {Great__factory, Test__factory} from '../typechain';
import { Wrapper } from "./Wrapper";
import { Test } from "../typechain/Test";
import { expect } from "chai";
import { Wallet, Provider, Contract } from "zksync-ethers";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
// import { BigNumber, BigNumberish, ethers } from 'ethers';

export const IMPLEMENTATION_SLOT =
  '0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc'; // bytes32(uint256(keccak256('eip1967.proxy.implementation')) - 1)



const TokenVotingAddresses: any = {
  arbitrum: {
    dao: '0xF3AaA3372EbBf01b923a4Cc98Cd847126b3D73cA',
    tokenVotingRepo: '0x1AeD2BEb470aeFD65B43f905Bd5371b1E4749d18',
    url: 'https://arbitrum-mainnet.infura.io/v3/7a03fcb37be7479da06f92c5117afd47',
  },
  holesky: {
    dao: '0x85138280659cc0cA3f40579E2C8f2713fBAA8878',
    tokenVotingRepo: '0xae05Dd0359377830105B0140b2FaFC35c068d565',
    url: 'https://holesky.infura.io/v3/7a03fcb37be7479da06f92c5117afd47',
  },
  mainnet: {
    dao: '0xf2d594F3C93C19D7B1a6F15B5489FFcE4B01f7dA',
    tokenVotingRepo: '0xb7401cD221ceAFC54093168B814Cc3d42579287f',
    url: 'https://mainnet.infura.io/v3/7a03fcb37be7479da06f92c5117afd47',
  },
  sepolia: {
    dao: '0xCa834B3F404c97273f34e108029eEd776144d324',
    tokenVotingRepo: '0x424F4cA6FA9c24C03f2396DF0E96057eD11CF7dF',
    url: "https://sepolia.infura.io/v3/7a03fcb37be7479da06f92c5117afd47"
  },
  // baseMainnet: {
  //   dao: '0x264308C03feAfA071C97b73b09E911530CCCd216',
  //   tokenVotingRepo: '0x2532570DcFb749A7F976136CC05648ef2a0f60b0',
  //   url: 'https://base-mainnet.infura.io/v3/481a4cdc7c774286b8627f21c6827f48',
  // },
  polygon: {
    dao: '0x6d4FB6Ff01A172774f42789fcfcdd84E68c28494',
    tokenVotingRepo: '0xae67aea0B830ed4504B36670B5Fa70c5C386Bb58',
    url: 'https://polygon-mainnet.infura.io/v3/7a03fcb37be7479da06f92c5117afd47',
  }
}

const MultisigAddresses: any = {
  arbitrum: {
    dao: '0xF3AaA3372EbBf01b923a4Cc98Cd847126b3D73cA',
    multisigRepo: '0x7553E6Fb020c5740768cF289e603770AA09b7aE2',
    url: 'https://arbitrum-mainnet.infura.io/v3/7a03fcb37be7479da06f92c5117afd47',
  },
  holesky: {
    dao: '0x85138280659cc0cA3f40579E2C8f2713fBAA8878',
    multisigRepo: '0xde1414F52A885cb9b899870f85bDCdb2Dec7C5dd',
    url: 'https://holesky.infura.io/v3/7a03fcb37be7479da06f92c5117afd47',
  },
  mainnet: {
    dao: '0xf2d594F3C93C19D7B1a6F15B5489FFcE4B01f7dA',
    multisigRepo: '0x8c278e37D0817210E18A7958524b7D0a1fAA6F7b',
    url: 'https://mainnet.infura.io/v3/7a03fcb37be7479da06f92c5117afd47',
  },
  sepolia: {
    dao: '0x9e7956C8758470dE159481e5DD0d08F8B59217A2',
    multisigRepo: '0x424F4cA6FA9c24C03f2396DF0E96057eD11CF7dF',
    url: "https://sepolia.infura.io/v3/7a03fcb37be7479da06f92c5117afd47"
  },
  // baseMainnet: {
  //   dao: '0x264308C03feAfA071C97b73b09E911530CCCd216',
  //   multisigRepo: '0xcDC4b0BC63AEfFf3a7826A19D101406C6322A585',
  //   url: 'https://base-mainnet.infura.io/v3/481a4cdc7c774286b8627f21c6827f48',
  // },
  polygon: {
    dao: '0x6d4FB6Ff01A172774f42789fcfcdd84E68c28494',
    multisigRepo: '0x5A5035E7E8aeff220540F383a9cf8c35929bcF31',
    url: 'https://polygon-mainnet.infura.io/v3/7a03fcb37be7479da06f92c5117afd47',
  }
}

const AdminAddresses: any = {
  arbitrum: {
    dao: '0x326A2aee6A8eE78D79E7E956DE60C6E452f76a8e',
    adminRepo: '0x326A2aee6A8eE78D79E7E956DE60C6E452f76a8e',
    url: 'https://arbitrum-mainnet.infura.io/v3/7a03fcb37be7479da06f92c5117afd47',
  },
 
  mainnet: {
    dao: '0xA4371a239D08bfBA6E8894eccf8466C6323A52C3',
    adminRepo: '0xA4371a239D08bfBA6E8894eccf8466C6323A52C3',
    url: 'https://mainnet.infura.io/v3/7a03fcb37be7479da06f92c5117afd47',
  },
  sepolia: {
    dao: '0x152c9E28995E418870b85cbbc0AEE4e53020edb2',
    adminRepo: '0x152c9E28995E418870b85cbbc0AEE4e53020edb2',
    url: "https://sepolia.infura.io/v3/7a03fcb37be7479da06f92c5117afd47"
  },
  // baseMainnet: {
  //   dao: '0x264308C03feAfA071C97b73b09E911530CCCd216',
  //   adminRepo: '0xcDC4b0BC63AEfFf3a7826A19D101406C6322A585',
  //   url: 'https://base-mainnet.infura.io/v3/481a4cdc7c774286b8627f21c6827f48',
  // },
  // polygon: {
  //   dao: '0x6d4FB6Ff01A172774f42789fcfcdd84E68c28494',
  //   adminRepo: '0x5A5035E7E8aeff220540F383a9cf8c35929bcF31',
  //   url: 'https://polygon-mainnet.infura.io/v3/7a03fcb37be7479da06f92c5117afd47',
  // }
}

describe("Test", function () {

  
  // it('zksync', async () => {
  //   const artifact = await hre.deployer.loadArtifact('Test')
  //   const newArtifact = await hre.deployer.loadArtifact('Test2')

  //   const proxy = await hre.zkUpgrades.deployProxy(await hre.deployer.getWallet(), artifact, [], {
  //     unsafeAllow: ['constructor'],
  //     constructorArgs: [],
  //     kind: 'uups',
  //   },);

  //   const curr = await readImplementationValueFromSlot(proxy.address)

  //   await hre.zkUpgrades.upgradeProxy(await hre.deployer.getWallet(), proxy.address, newArtifact, {
  //     unsafeAllow: ['constructor'],
  //     constructorArgs: [],
  //     kind: 'uups',
  //   },)

  //   const neww = await readImplementationValueFromSlot(proxy.address)

  //   console.log(curr, neww)
  // })

  // it.skip("hardhat", async () => {
  //   // hardhat
  //   const artifact = await hre.artifacts.readArtifact('Test');
  //   const newArtifact = await hre.artifacts.readArtifact('Test2')

  //   const signer = (await hre.ethers.getSigners())[0]
  //   let contract = new ethers.ContractFactory(
  //     artifact.abi,
  //     artifact.bytecode,
  //     // @ts-ignore
  //     signer
  //   );

  //   const proxy = await hre.upgrades.deployProxy(contract, [], {
  //       kind: 'uups',
  //       unsafeAllow: ['constructor'],
  //       constructorArgs: []
  //   })

  //   const ddd = await hre.ethers.provider.getStorageAt(proxy.address, IMPLEMENTATION_SLOT)
  //   const currAddress = ethers.utils.defaultAbiCoder.decode(['address'], ddd)[0]

  //   let contract2 = new ethers.ContractFactory(
  //     newArtifact.abi,
  //     newArtifact.bytecode,
  //     // @ts-ignore
  //     signer
  //   );
    
  //   await hre.upgrades.upgradeProxy(proxy.address, contract2, {
  //     kind: 'uups',
  //     unsafeAllow: ['constructor'],
  //     constructorArgs: []
  //   });

  //   const ddd2 = await hre.ethers.provider.getStorageAt(proxy.address, IMPLEMENTATION_SLOT)
  //   const newAddress = ethers.utils.defaultAbiCoder.decode(['address'], ddd2)[0]

  //   console.log(currAddress, newAddress)
  // })

 
  // it("Admin", async () => {
  //   console.log("oeee")
  //   for (const [networkName, value] of Object.entries(AdminAddresses)) {
  //     console.log(`=================${networkName}=============`)
      
  //     // @ts-ignore
  //     let provider = new ethers.providers.JsonRpcProvider(value.url);
  //     const wallet = new ethers.Wallet('0xf8880c7e20013925e5cd4ebb440de9120aabab51e7fef5f0e23e169b53196310', provider);

  //     const dao = new Contract(
  //        // @ts-ignore
  //       value.dao,
  //       ['function hasPermission(address,address,bytes32,bytes) public view returns(bool)'],
  //       wallet
  //     );

  //      // @ts-ignore
  //     console.log(value.tokenVotingRepo, ' nice')

  //     const tokenvotingRepo = new Contract(
  //        // @ts-ignore
  //       value.adminRepo, 
  //       [
  //         'function isGranted(address,address,bytes32,bytes) public view returns(bool)',
  //         'function getLatestVersion(uint8) public view returns(tuple(tuple(uint8 release,uint16 build) tag,address pluginSetup,bytes buildMetadata))'
  //       ],
  //       wallet
  //     );

  //     // const permissionId = ethers.utils.id("MAINTAINER_PERMISSION");

  //     // let isAllowed = await tokenvotingRepo.isGranted(tokenvotingRepo.address, dao.address, permissionId, "0x")
  //     // console.log(isAllowed) // this must be printed as true.


  //     const latestVersion = await tokenvotingRepo.getLatestVersion(1)
  //     const currentPluginSetup = latestVersion.pluginSetup;
      
  //     const pluginSetupContract = new Contract(
  //       currentPluginSetup,
  //       [
  //         'function implementation() public view returns(address)'
  //       ],
  //       wallet
  //     );

  //     console.log("current latest plugins setup: ", currentPluginSetup);
  //     console.log("multisigBase", await pluginSetupContract.implementation())
  //     console.log("current latest build metadata: ", latestVersion.buildMetadata)
  //     console.log(latestVersion.tag.build)
  //   }

  //   // deploy new tokenvoting setup with the same constructor arguments
  //   // create a proposal to `createVersion` of tokenPluginRepo with the following args:
  //   //   1, newPluginSetupAddr, buildMetadata, 0x
  // })


  it.only("final", async () => {
      const artifact = await hre.deployer.loadArtifact('TestHere')
      const addr = await hre.deployer.deploy(artifact)

      // addr.setUp();
  })

  
});

