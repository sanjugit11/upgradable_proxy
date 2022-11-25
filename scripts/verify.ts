const hre = require("hardhat");

async function main() {
  await hre.run("verify:verify", {
    //Deployed Token contract address
    address: "0x6B4072B233039733015380433F4a2A04778c936E",
    //Path of your main contract.
    contract: "contracts/Token.sol:Token",
  });
  await hre.run("verify:verify", {
    //Deployed Implementation 1 contract address
    address: "0x10287dA3D94Cd5BebA987e82359C7b2DC062C33c",
    //Path of your main contract.
    contract: "contracts/Staking.sol:staking",
  });
  await hre.run("verify:verify", {
    //Deployed Implementation 2 contract address
    address: "0x3bBc310604D8F45F8eE5342E225333b7B4a9DB12",
    //Path of your main contract.
    contract: "contracts/Staking2.sol:staking2",
  });







/**
    For constructor based contracts reffer this, and provide constructor as an arguement 
 */

  // await hre.run("verify:verify", {
  //   //Deployed contract address
  //   address: "0x6B4072B233039733015380433F4a2A04778c936E",
  //   //Pass arguments as string and comma seprated values
  //   constructorArguments: [],
  //   //Path of your main contract.
  //   contract: "contracts/MyContract.sol:MyContract",
  // });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
//npx hardhat run --network <network name>  scripts/verify.ts
