// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KarmaToken is ERC20 {
    uint256 public exchangeRate = 1000; // 1 ETH = 1000 tokens

    constructor() ERC20("KarmaToken", "KRM") {}

    function mintTokens() external payable {
        uint256 tokensToMint = msg.value;
        _mint(msg.sender, tokensToMint);
    }

    function exchangeTokens(uint256 _tokensToExchange) external {
        require(_tokensToExchange > 0, "Amount must be greater than 0");
        require(
            balanceOf(msg.sender) >= _tokensToExchange,
            "Insufficient balance"
        );

        uint256 ethToReceive = _tokensToExchange / exchangeRate;
        require(address(this).balance >= ethToReceive, "Insufficient contract balance");

        _burn(msg.sender, _tokensToExchange);
        payable(msg.sender).transfer(ethToReceive);
    }

    // Fallback function to receive ETH
    receive() external payable {}
}
