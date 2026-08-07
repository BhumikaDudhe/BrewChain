"use client";

import { useEffect, useState } from "react";
import { connectWallet } from "../lib/wallet";

export default function Navbar() {
  const [wallet, setWallet] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark";

    setDarkMode(isDark);
    document.body.classList.toggle("dark", isDark);

    autoConnect();
  }, []);

  async function autoConnect() {
    if (!window.ethereum) return;

    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    if (accounts.length > 0) {
      const data = await connectWallet();
      setWallet(data);
    }
  }

  const toggleTheme = () => {
    const next = !darkMode;

    setDarkMode(next);

    document.body.classList.toggle("dark", next);

    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const handleConnect = async () => {
    const data = await connectWallet();

    if (data) {
      setWallet(data);
    }
  };

  return (
    <nav className="navbar">

      <div className="logo">
        ☕ BrewChain
      </div>

      <ul className="nav-links">
        <li><a href="#">Features</a></li>
        <li><a href="#">How It Works</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Dashboard</a></li>
      </ul>

      <div className="nav-actions">

        <button
          className={`wallet-btn ${wallet ? "connected" : ""}`}
          onClick={handleConnect}
        >
          {wallet ? (
            <>
              <span className="shine-dot"></span>

              {wallet.shortAddress}
            </>
          ) : (
            "Connect Wallet"
          )}
        </button>

        <button
          className="avatar-btn"
          aria-label="Profile"
        >
          🦊
        </button>

        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </div>

    </nav>
  );
}