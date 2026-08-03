import { BrowserProvider } from "ethers";

export async function connectWallet() {
  // Check if MetaMask is installed
  if (!window.ethereum) {
    alert("Please install MetaMask!");
    return null;
  }

  try {
    // Request wallet connection
    await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    // Create provider
    const provider = new BrowserProvider(window.ethereum);

    // Get signer
    const signer = await provider.getSigner();

    // Get wallet address
    const address = await signer.getAddress();

    return {
      provider,
      signer,
      address,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}