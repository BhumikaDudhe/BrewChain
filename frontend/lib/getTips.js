import { BrowserProvider, Contract } from "ethers";
import { CONTRACT_ADDRESS } from "../constants/contractAddress";
import { CONTRACT_ABI } from "../constants/contractABI";

export async function getTips() {

  if (!window.ethereum) return [];

  try {

    const provider = new BrowserProvider(window.ethereum);

    const contract = new Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      provider
    );

    const filter = contract.filters.TipSent();

    const logs = await contract.queryFilter(filter);

    return logs.reverse().map((log) => ({
      sender: log.args.sender,
      amount: log.args.amount,
      note: log.args.note,
      timestamp: Number(log.args.timestamp),
      txHash: log.transactionHash,
    }));

  } catch (err) {

    console.error(err);

    return [];

  }
}