import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { OwnedUpgradeabilityProxy, 
         OwnedUpgradeabilityProxy__factory,
         Staking,
         Staking2,
         Staking__factory,
         Staking2__factory,
         Token,
         Token__factory,  } from "../typechain";
import { expandTo18Decimals,expandTo16Decimals} from "./utilities/utilities";


describe("StakingA", function() {
    let stakingA: Staking;
    let stakingB: Staking2;
    let owner: SignerWithAddress;
    let addr1: SignerWithAddress;
    let addr2: SignerWithAddress;
    let addrs: SignerWithAddress[];
    let token: Token;
    let main_proxy: OwnedUpgradeabilityProxy;
    let attached_proxy: Staking;
    

    beforeEach(async function () {
        [owner,addr1,addr2,...addrs] = await ethers.getSigners();
        token = await new Token__factory(owner).deploy();   //this is my token
        stakingA = await new Staking__factory(owner).deploy();  //first staking contract
        main_proxy = await new OwnedUpgradeabilityProxy__factory(owner).deploy(); //upgardibality contract
        await main_proxy.upgradeTo(stakingA.address);     //OwnedUpgradeability apply on stacking1 address
        attached_proxy = await new Staking__factory(owner).attach(main_proxy.address); //deploy the staking contract on the address of
        await attached_proxy.Initialize(token.address);   //initilize the token
        /////////////////////////  2  //////////////////////////////////
        stakingB = await new Staking2__factory(owner).deploy();

    })
    
describe("STAKINGA : Deposit and Withdraw", () => {

    it("StakingA : Deposit,attached_proxy", async () => { 
        await token.connect(owner).mint(addr1.address,expandTo18Decimals(1000));
        await token.connect(addr1).approve(attached_proxy.address,expandTo18Decimals(1000));
        await attached_proxy.connect(addr1).deposit(expandTo18Decimals(300),{gasLimit: 3000000});
        console.log("balance of contract",await token.balanceOf(attached_proxy.address));
        // 2
        await main_proxy.upgradeTo(stakingB.address);
        let attch_B = await new Staking2__factory(owner).attach(main_proxy.address);
        await token.connect(owner).mint(addr1.address,expandTo18Decimals(1000));
        await token.connect(addr1).approve(attch_B.address,expandTo18Decimals(1000));
        // await attch_B.connect(addr1).deposit(addr1.address,expandTo18Decimals(40),{gasLimit: 3000000});
        await attch_B.connect(addr1).deposit(expandTo18Decimals(400),{gasLimit: 3000000});
        console.log("balance of contract2",await token.balanceOf(attch_B.address));

     })

    it("StakingA : Withdraw,attached_proxy", async ()=> {
        await token.connect(owner).mint(addr1.address,expandTo18Decimals(1000));
        await token.connect(addr1).approve(attached_proxy.address,expandTo18Decimals(1000));
        await attached_proxy.connect(addr1).deposit(expandTo18Decimals(300),{gasLimit: 3000000});
        console.log("balance of contract",await token.balanceOf(attached_proxy.address));
        // 2
        await main_proxy.upgradeTo(stakingB.address);
        let attch_B = await new Staking2__factory(owner).attach(main_proxy.address);
        await token.connect(owner).mint(addr1.address,expandTo18Decimals(1000));
        await token.connect(addr1).approve(attch_B.address,expandTo18Decimals(1000));
        // await attch_B.connect(addr1).deposit(addr1.address,expandTo18Decimals(40),{gasLimit: 3000000});
        await attch_B.connect(addr1).deposit(expandTo18Decimals(400),{gasLimit: 3000000});
        console.log("balance of contract2",await token.balanceOf(attch_B.address));

        await attch_B.connect(addr1).withdraw(expandTo18Decimals(500),{gasLimit:3000000});
        console.log("balance of contract2",await token.balanceOf(attch_B.address));
   

    })

   })

})