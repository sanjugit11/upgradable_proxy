import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "hardhat-typechain";
import "hardhat-gas-reporter";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-contract-sizer";
import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
};

dotenv.config();
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
  }
});

export default {
  contractSizer: {
    alphaSort: false,
    disambiguatePaths: true,
    runOnCompile: true,
    strict: false,
    only: [':OptVaultLp',':SwapLogic',':OptVaultFactory',':YSL',':USDy',':OptVault'],
  },
  networks: {
    hardhat: {
      // gas: 10000000000,
      allowUnlimitedContractSize: true,
      
    },
    // mumbaitest: {
    //   url: "Mumbai_URL",
    //   accounts: [`0x${process.env.PVTKEY}`],
      // gasPrice: 500000000
    // },
    // localhost: {
    //   url: "http://127.0.0.1:8545",
    // },
    // ropsten:{
    //   url: "ropsten_URL",
    //   accounts:[`0x${process.env.PVTKEY}`],
    // },
    // rinkeby: {
    //   url: `${process.env.ALCHEMY_API_KEY}`,
    //   accounts: {mnemonic: process.env.TESTNET_MNEMONIC},
    //   },
      // rinkebytest:{
      //   url: "rinkeby_URL",
      //   accounts: [`0x${process.env.PVTKEY}`],
      // },
      // bsctestnet: {
      //   url: "bsctestnet_URL",
      //   accounts: [`0x${process.env.PVTKEY}`],
      //   // gasPrice: 500000000
      // },
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_API_FOR_TESTNET,
  },
  // polygonScan: {
  //   apikey:process.env.POLYAPI,
  // },
  
  solidity: {
    compilers: [
      // {
      //   version: "0.6.6",
      //   settings: {
      //     optimizer: {
      //       enabled: true,
      //       runs: 200,
      //     },
      //   },
      // },
      {
        version: "0.8.13",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      // {
      //   version: "0.5.16",
      //   settings: {
      //     optimizer: {
      //       enabled: true,
      //       runs: 200,
      //     },
      //   },
      // },
      {
        version: "0.8.7",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ]
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },

  gasReporter: {
    enabled: false,
  },
};
