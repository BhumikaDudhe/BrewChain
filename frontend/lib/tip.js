
import { BrowserProvider, Contract, parseEther } from "ethers";
import { CONTRACT_ADDRESS } from "../constants/contractAddress";
import { CONTRACT_ABI } from "../constants/contractABI";

export async function sendTip(note) {

    const provider = new BrowserProvider(window.ethereum);

const network = await provider.getNetwork();
console.log("Chain ID:", network.chainId.toString());

const signer = await provider.getSigner();
console.log("Wallet:", await signer.getAddress());

const balance = await provider.getBalance(await signer.getAddress());
console.log("Balance:", balance.toString());

  if (!window.ethereum) {
    alert("Please install MetaMask!");
    return;
  }

  try {
    // Connect to MetaMask
    const provider = new BrowserProvider(window.ethereum);

    // Get signer
    const signer = await provider.getSigner();

    // Create contract instance
    const contract = new Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      signer
    );

    // Send 0.001 ETH with the note
    const tx = await contract.sendTip(note, {
      value: parseEther("0.001"),
    });

    alert("Transaction submitted! Waiting for confirmation...");

    await tx.wait();

    alert("🎉 Coffee sent successfully!");
  } catch (error) {
    console.error(error);
    alert("Transaction failed.");
  }
}