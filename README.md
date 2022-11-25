# Hardhat BoilerPlate_Proxy

> It is just a boilerplate setup for hardhat,for writing upgradeable smart contracts.


# Project Setup
Log in to GitLab, take a clone from the repository, and copy the URL. Then, open Visual Studio, go to the terminal run command :
> git clone and paste the URL with it. 

## Install dependencies
> npm install or  npm i : NPM is a node package manager. It is basically used for managing dependencies of various server side dependencies. 


### Customize .env file

Give your account mnemonic in TESTNET_MNEMONIC \
Give your etherscan api key for rinkeby in ETHERSCAN_API_FOR_RINKEBY. You can create it from [here](https://etherscan.io/). Its important for verification. \
Give your alchemy api key in ALCHEMY_API_KEY.Get it from [here](https://auth.alchemyapi.io/).\
Give your ethersacn api key for bscscan in ETHERSCAN_API_FOR_TESTNET. You can create it from [here](https://bscscan.com/myapikey). Its important for verification.

## Gas Reporter

Gas reporter can be enabled or disabled by setting gasReporter to true or false in hardhat.config.ts.

## Compile
> npx hardhat compile : Command used for compiling the  possible set of files at a time.


## Run tests
> npx hardhat test : Command used for testing the file or a particular function, to make sure that the actual output is equal to the expected output or not.

## Clean artifacts and cache
> npx hardhat clean: Command used for cleaning the Artifacts and Cache simultaneously. 
> To re-create it use command : 
            >npx hardhat compile 
and run it.

## Deploy script
> Command for deploying  : npx hardhat run  scripts/<scriptName> --network <networkType>

### For rinkeby

```bash
npx hardhat run --network rinkeby  scripts/deploy.ts
```

### For bscscan

```bash
npx hardhat run --network testnet  scripts/deploy.ts
```

### For local

```bash
npx hardhat run --network localhost  scripts/deploy.ts
```

### For others you can refer hardhat docs [here](https://forum.openzeppelin.com/t/verify-smart-contract-inheriting-from-openzeppelin-contracts/4119)

## Verify script

Replace the address with your deployed contract,replace constructor arguments with your contract constructor arguments,then in contracts give the path to your main solidity file and then your contract name in verify.ts file.

Note : Make sure to run the verify script after 2min of deployment either you can get an error.

Command for Verifing Tokens : npx hardhat run  scripts/<scriptName> --network <networkType>

### For bscscan

```bash
npx hardhat run --network testnet  scripts/verify.ts
```

### For rinkeby

```bash
npx hardhat run --network rinkeby  scripts/verify.ts
```

### For More Information Reffer to : 
    https://docs.google.com/document/d/1bBXyJWZK8VWW1oThGBAoKjklb-giqEhArWvnXYQd5NI/edit#
