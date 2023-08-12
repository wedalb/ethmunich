// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/access/Ownable.sol";

contract ETHServices is Ownable {
    struct Service {
        string description;
        string title;
        uint256 amount;
        address owner;
        address contestant;
    }

    mapping(address => Service) public services;

    uint256 public feeCollected;

    address[] public depositedAddresses;

    event serviceDeposited(address owner, Service service);

    event serviceWithdrawn(address owner, Service service);

    function setContestant(address _service) external {
        require(services[_service].contestant == address(0), "contestant not null");
        services[_service].contestant = msg.sender;
    }

    function revokeContestant(address _service) external {
        require(services[_service].owner == msg.sender || services[_service].contestant == msg.sender, "Operation Forbidden");
        services[_service].contestant = address(0);
    }

    function submit(string calldata title, string calldata description)
        external
        payable
    {
        require(
            services[msg.sender].amount == 0,
            "User already has a pending service"
        );
        services[msg.sender].owner = msg.sender;
        services[msg.sender].title = title;
        services[msg.sender].description = description;
        uint256 feeAmount = (msg.value * 1) / 1000;
        feeCollected += feeAmount;
        services[msg.sender].amount = msg.value - feeAmount;
        depositedAddresses.push(msg.sender);
        emit serviceDeposited(msg.sender, services[msg.sender]);
    }

    function accept(address _service) external {
        require(
            services[_service].amount > 0,
            "Insufficient balance Or Service not available"
        );
        require(services[_service].contestant != address(0));
        require(msg.sender == services[_service].owner);
        payable(services[_service].contestant).transfer(services[_service].amount);
        emit serviceWithdrawn(msg.sender, services[_service]);
        services[_service].amount = 0;
        // Remove the address from the depositedAddresses array
        for (uint256 i = 0; i < depositedAddresses.length; i++) {
            if (depositedAddresses[i] == _service) {
                depositedAddresses[i] = depositedAddresses[
                    depositedAddresses.length - 1
                ];
                depositedAddresses.pop();
                break;
            }
        }
    }

    function cancel(address _service) external {
        require(services[_service].amount > 0, "No Active Service");
        require(msg.sender == services[_service].owner);
        payable(_service).transfer(services[_service].amount);
        emit serviceWithdrawn(msg.sender, services[msg.sender]);
        services[_service].amount = 0;
        // Remove the address from the depositedAddresses array
        for (uint256 i = 0; i < depositedAddresses.length; i++) {
            if (depositedAddresses[i] == _service) {
                depositedAddresses[i] = depositedAddresses[
                    depositedAddresses.length - 1
                ];
                depositedAddresses.pop();
                break;
            }
        }
    }

    function getDepositedAddresses() public view returns (address[] memory) {
        return depositedAddresses;
    }

    receive() external payable {}
}
