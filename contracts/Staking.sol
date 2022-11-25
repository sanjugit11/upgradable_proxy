// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../node_modules/@openzeppelin/contracts/access/AccessControl.sol";
import "../node_modules/@openzeppelin/contracts/proxy/utils/Initializable.sol";

contract staking is Initializable {
    IERC20 public token; // state variables 
    uint256 public totalamount; // state variables
    mapping(address => uint256) public userdeposited;// providing mapping for amount deposited by user//

/**
    @dev Initialize Function 
 */
    function Initialize(address _token) public initializer{
        token = IERC20(_token);
    }

/**
    @dev Deposit Function for depositing Tokens in Smart contracts  
    @param amount , amount to be deposited 
 */
    function deposit(uint amount) external {
        require(amount>=5 ether,'staking: Amount should be not less than or equal to 5 ether');
        userdeposited[msg.sender] +=amount;
        totalamount +=amount;
        token.transferFrom(msg.sender, address(this), amount);
    }
/**
    @dev This is a view function to get Total amount of user deposited in contract
    @param user, address of the users
 */
    function gettotalamount(address user) external view returns (uint256){
        return userdeposited[user];
    }
/**
    @dev Withdraw function for withdrawing the user deposities 
    @param _amount, amount to be withdrawan 
 */
    function withdraw(uint256 _amount) external {
        require(_amount > 5 ether,"staking : amount should be greater then 5 ether");
        userdeposited[msg.sender] -= _amount;
        totalamount -= _amount;
        token.transfer(msg.sender,_amount);
    }
}