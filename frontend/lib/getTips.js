"use client";

import { BrowserProvider, Contract, getAddress } from "ethers";
import { CONTRACT_ADDRESS } from "../constants/contractAddress";
import { CONTRACT_ABI } from "../constants/contractABI";

export async function getTips() {
  if (!window.ethereum) {
    console.log("MetaMask not found");
    return [];
  }

  try {
    const provider = new BrowserProvider(window.ethereum);

    // Validate and normalize the contract address
    const address = getAddress(CONTRACT_ADDRESS.trim());

    console.log("TipJar address:", address);

    const network = await provider.getNetwork();

    console.log("Connected chain:", network.chainId.toString());

    const contract = new Contract(
      address,
      CONTRACT_ABI,
      provider
    );

    const latestBlock = await provider.getBlockNumber();

    // RPC limit = 10,000 blocks
    const fromBlock = Math.max(0, latestBlock - 9999);

    console.log(
      `Reading TipSent events from block ${fromBlock} to ${latestBlock}`
    );

    const filter = contract.filters.TipSent();

    const logs = await contract.queryFilter(
      filter,
      fromBlock,
      latestBlock
    );

    console.log("Tip events found:", logs.length);

    return logs.reverse().map((log) => ({
      sender: log.args.sender,
      amount: log.args.amount,
      note: log.args.note,
      timestamp: Number(log.args.timestamp),
      txHash: log.transactionHash,
    }));

  } catch (err) {
    console.error("Failed to load tips:", err);
    return [];
  }
}