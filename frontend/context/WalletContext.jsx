"use client";

import { createContext, useContext, useState } from "react";
import { connectWallet } from "../lib/wallet";

const WalletContext = createContext();


export function WalletProvider({ children }) {

  const [wallet, setWallet] = useState(null);


  async function connect() {

    const data = await connectWallet();

    if (data) {
      setWallet(data);
    }

    return data;
  }


  return (
    <WalletContext.Provider
      value={{
        wallet,
        connect
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}



export function useWallet() {

  return useContext(WalletContext);

}
