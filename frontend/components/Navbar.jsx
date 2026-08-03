"use client";

import { useState, useEffect } from "react";
import { connectWallet } from "../lib/wallet";

export default function Navbar() {
  const [walletAddress, setWalletAddress] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark";
    setDarkMode(isDark);
    document.body.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.body.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const handleConnect = async () => {
    const wallet = await connectWallet();
    if (wallet) {
      setWalletAddress(wallet.address);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="BrewChain" className="logo-icon" />
        <span>BrewChain</span>
      </div>

      <ul className="nav-links">
        <li><a href="#">Features</a></li>
        <li><a href="#">How It Works</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Dashboard</a></li>
      </ul>

      <div className="nav-actions">
        <button
          className={`wallet-btn ${walletAddress ? "connected" : ""}`}
          onClick={handleConnect}
        >
          {walletAddress ? (
            <span className="connected-content">
              <span className="shine-dot"></span>
              Connected 🎉
            </span>
          ) : (
            "Connect Wallet"
          )}
        </button>

        <button className="avatar-btn" aria-label="Profile">
          🦊
        </button>

        <button
          className="theme-btn"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}