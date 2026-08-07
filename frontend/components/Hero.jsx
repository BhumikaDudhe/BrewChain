"use client";

import { useState } from "react";
import { sendTip } from "../lib/tip";
import TransactionPopup from "./TransactionPopup";
import { useWallet } from "../context/WalletContext";

export default function Hero() {
  const { wallet, connect } = useWallet();
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({
  open: false,
  status: "success",
  amount: "",
  hash: "",
});

  const handleBuyCoffee = async () => {
  setLoading(true);

  const result = await sendTip("☕ Thanks for the coffee!");

  setLoading(false);

  if (result.success) {
    setPopup({
      open: true,
      status: "success",
      amount: result.amount + " ETH",
      hash: result.hash,
    });
  } else {
    setPopup({
      open: true,
      status: "error",
      amount: "",
      hash: "",
    });
  }
};

  return (
    <>
  <TransactionPopup
    open={popup.open}
    status={popup.status}
    amount={popup.amount}
    hash={popup.hash}
    onClose={() =>
      setPopup({
        ...popup,
        open: false,
      })
    }
  />
    <section className="hero">
      <div className="hero-container">

        <img src="/images/bean.png" alt="" className="bean-bg" />

        <span className="bean bean-1">🫘</span>
        <span className="bean bean-2">🫘</span>
        <span className="bean bean-3">🫘</span>
        <span className="bean bean-4">🫘</span>

        <div
          className="bubble hero-bubble"
          style={{ width: "70px", height: "70px", top: "40px", left: "-35px" }}
        ></div>
        <div
          className="bubble hero-bubble"
          style={{ width: "90px", height: "90px", bottom: "-40px", right: "-20px" }}
        ></div>

        <div className="hero-left">
          <h1>
            Support creators
            <br />
            with a cup of
            <br />
            crypto coffee
          </h1>

          <p className="description">
            Send ETH, Polygon, or any supported token directly through
            MetaMask in just one click.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={handleBuyCoffee}
              disabled={loading}
            >
              {loading ? "Processing..." : "☕ Buy a Coffee"}
            </button>

            <button
  className="secondary-btn"
  onClick={connect}
>
  🔗 {
    wallet
    ? wallet.shortAddress
    : "Connect Wallet"
  }
</button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="/images/coffee.png"
            alt="Coffee"
            className="coffee-image"
          />

          <div className="wallet-card">
            <div className="wallet-card-top">
              <span className="wallet-icon">🦊</span>
              <div>
                <p className="wallet-address">
  {wallet ? wallet.shortAddress : "Not Connected"}
</p>

<p className="wallet-network">
  {wallet ? wallet.network : "Sepolia"}
</p>
              </div>
            </div>

            <div className="wallet-card-bottom">
              <p className="wallet-balance">
  {wallet ? wallet.balance : "0.0000"} ETH
</p>
              <p className="wallet-label">
                Wallet Balance <span className="dot"></span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  );
}