import { BrowserProvider, formatEther } from "ethers";

export async function connectWallet() {
  if (!window.ethereum) {
    return null;
  }

  try {
    await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const provider = new BrowserProvider(window.ethereum);

    const signer = await provider.getSigner();

    const address = await signer.getAddress();

    const balance = await provider.getBalance(address);

    const network = await provider.getNetwork();

    return {
      provider,
      signer,
      address,
      shortAddress:
        address.slice(0, 6) + "..." + address.slice(-4),
      balance: Number(formatEther(balance)).toFixed(4),
      network:
        network.chainId === 11155111n
          ? "Sepolia"
          : network.name,
    };

  } catch (error) {
    console.error(error);
    return null;
  }
}