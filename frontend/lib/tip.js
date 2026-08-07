import { BrowserProvider, Contract, parseEther } from "ethers";
import { CONTRACT_ADDRESS } from "../constants/contractAddress";
import { CONTRACT_ABI } from "../constants/contractABI";

export async function sendTip(note) {
  if (!window.ethereum) {
    return {
      success: false,
      message: "Please install MetaMask.",
    };
  }

  try {
    const provider = new BrowserProvider(window.ethereum);

    const signer = await provider.getSigner();

    const contract = new Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      signer
    );

    const amount = "0.001";

    const tx = await contract.sendTip(note, {
      value: parseEther(amount),
    });

    const receipt = await tx.wait();

    if (receipt.status === 1) {

      // Refresh Supporter Wall automatically
      window.dispatchEvent(new Event("tip-success"));

      return {
        success: true,
        amount,
        hash: receipt.hash,
        wallet: await signer.getAddress(),
      };
    }

    return {
      success: false,
      message: "Transaction failed.",
    };

  } catch (error) {
    console.error(error);

    if (error.code === 4001) {
      return {
        success: false,
        message: "Transaction cancelled.",
      };
    }

    return {
      success: false,
      message:
        error.reason ||
        error.shortMessage ||
        "Transaction failed.",
    };
  }
}