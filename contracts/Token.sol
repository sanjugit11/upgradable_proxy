// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    address public admin;

/**
    @dev Constructor 
 */
    constructor ()  ERC20("Token","Tkn"){
           _mint(msg.sender,10000*10**18);
           admin = msg.sender;
       }

/**
    @dev mint function only for owner 
 */
    function mint (address to , uint amount) external {
        require(msg.sender == admin,"Only for owner");
        _mint(to,amount);
    }
/**
    @dev burn function only for owner 
 */
    function burn ( uint amount ) external{
        require(msg.sender == admin,"Only for owner");
        _burn(msg.sender , amount);
    }
}





