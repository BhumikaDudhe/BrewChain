// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract TipJar is ReentrancyGuard {

    // Owner of the contract (Ifeoma)
    address public owner;

    // Maximum allowed note length
    uint256 public constant MAX_NOTE_LENGTH = 100;

    // Structure to store each tip
    struct Tip {
        address sender;
        uint256 amount;
        string note;
        uint256 timestamp;
    }

    // Array containing all tips
    Tip[] private tips;

    // Event emitted whenever someone sends a tip
    event TipSent(
        address indexed sender,
        uint256 amount,
        string note,
        uint256 timestamp
    );

    // Event emitted when owner withdraws funds
    event FundsWithdrawn(
        address indexed owner,
        uint256 amount
    );

    // Set the contract deployer as owner
    constructor() {
        owner = msg.sender;
    }

    // Restrict function access to owner only
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    // Send a tip with a short note
    function sendTip(string calldata note) external payable {

        require(msg.value > 0, "Tip amount must be greater than zero");

        require(
            bytes(note).length <= MAX_NOTE_LENGTH,
            "Note exceeds maximum length"
        );

        Tip memory newTip = Tip({
            sender: msg.sender,
            amount: msg.value,
            note: note,
            timestamp: block.timestamp
        });

        tips.push(newTip);

        emit TipSent(
            msg.sender,
            msg.value,
            note,
            block.timestamp
        );
    }

    // Return every tip
    function getAllTips() external view returns (Tip[] memory) {
        return tips;
    }

    // Return total number of supporters
    function getTotalTips() external view returns (uint256) {
        return tips.length;
    }

    // Withdraw all ETH from contract
    function withdraw() external nonReentrant {
    require(msg.sender == owner, "Only owner can withdraw");

    uint256 balance = address(this).balance;
    require(balance > 0, "No funds to withdraw");

    (bool success, ) = owner.call{value: balance}("");
    require(success, "Transfer failed");

    emit FundsWithdrawn(owner, balance);
}

    // Check current contract balance
    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }
}