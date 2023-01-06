const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  // Address of the whitelist contract that you deployed in the previous module
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  // URL from where we can extract the metadata for a Crypto Dev NFT
  const metadataURL = METADATA_URL;
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so cryptoDevsContract here is a factory for instances of our CryptoDevs contract.
  */
  const detDevsContract = await ethers.getContractFactory("DetDevs");

  // deploy the contract
  const deployedDetDevsContract = await detDevsContract.deploy(
    metadataURL,
    whitelistContract
  );

  // print the address of the deployed contract
  console.log(
    "DET Devs Contract Address:",
    deployedDetDevsContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// const { ethers } = require("hardhat");

// async function main() {
//   /*
//   A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
//   so whitelistContract here is a factory for instances of our Whitelist contract.
//   */
//   const whitelistContract = await ethers.getContractFactory("Whitelist");

//   // here we deploy the contract
//   const deployedWhitelistContract = await whitelistContract.deploy(10);
//   // 10 is the Maximum number of whitelisted addresses allowed
  
//   // Wait for it to finish deploying
//   await deployedWhitelistContract.deployed();

//   // print the address of the deployed contract
//   console.log(
//     "Whitelist Contract Address:",
//     deployedWhitelistContract.address
//   );
// }

// // Call the main function and catch if there is any error
// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });