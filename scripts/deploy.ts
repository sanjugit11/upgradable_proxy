const BN = require("ethers").BigNumber;
import { ethers } from "hardhat";
const {
  time, // time
  constants,
} = require("@openzeppelin/test-helpers");
const { factory } = require("typescript");
const ether = require("@openzeppelin/test-helpers/src/ether");

function sleep(ms : any) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Token__factory } from "../typechain";
async function main() {
  const [deployer] = await ethers.getSigners();
  const { chainId } = await ethers.provider.getNetwork();

  /**
   @dev const for deployed addresses
   */
const testnet = {
  Tkn : "0x6B4072B233039733015380433F4a2A04778c936E",
  Impl1 : "0x10287dA3D94Cd5BebA987e82359C7b2DC062C33c",
  Impl2 : "0x3bBc310604D8F45F8eE5342E225333b7B4a9DB12",
  Proxy : "0x0229f07dd7Bf633203C045b2B85609279D89B0D5", 
}
/**
 @dev Getting contracts for deployment via "ethers.getContractFactory" as we require ethers for deployment
 */
  let token = await ethers.getContractFactory("Token");
  let impl1 = await ethers.getContractFactory("staking");
  let impl2 = await ethers.getContractFactory("staking2");
  let proxy = await ethers.getContractFactory("OwnedUpgradeabilityProxy");

  /**
   @dev Deploying contracts 
   */
  let Tkn = await token.deploy();
  await sleep(3000);
  console.log(Tkn.address,"token");
  let Impl1 = await  impl1.deploy();
  await sleep(3000);
  console.log(Impl1.address,"Impl1");
  let Proxy = await proxy.deploy();
  await sleep(3000);
  console.log(Proxy.address,"Proxy");
  await Proxy.upgradeTo(Impl1.address);
  await sleep(3000);
  let stakingProxy = impl1.attach(Proxy.address); 
  await sleep(3000);
  console.log("RUN");
  await stakingProxy.Initialize(Tkn.address);
  await sleep(3000);



  let Impl2 = await impl2.deploy();
  console.log(Impl2.address,"Impl2");
  await sleep(3000);
  let oldproxy = await proxy.attach(Proxy.address);
  await sleep(3000);
  await oldproxy.upgradeTo(Impl2.address);
  await sleep(3000);
  console.log("proxy done");
  
  
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
//npx hardhat run --network <network name> scripts/deploy.ts
