"use client";

import { useEffect, useState } from "react";
import { formatEther } from "ethers";
import { getTips } from "../lib/getTips";
import "../styles/supporterWall.css";

export default function SupporterWall() {
  const [tips, setTips] = useState([]);

  async function loadTips() {
    try {
      const data = await getTips();

      // getTips() returns newest transactions first.
      // Keep only the latest transaction from each unique wallet.
      const uniqueTips = [];
      const seenWallets = new Set();

      for (const tip of data) {
        const wallet = tip.sender?.toLowerCase();

        if (!wallet || seenWallets.has(wallet)) {
          continue;
        }

        seenWallets.add(wallet);
        uniqueTips.push(tip);

        // Show maximum 3 unique supporters
        if (uniqueTips.length === 3) {
          break;
        }
      }

      setTips(uniqueTips);
    } catch (err) {
      console.error("Error loading supporters:", err);
      setTips([]);
    }
  }

  useEffect(() => {
    loadTips();

    window.addEventListener("tip-success", loadTips);

    return () => {
      window.removeEventListener("tip-success", loadTips);
    };
  }, []);

  function shorten(wallet) {
    if (!wallet) return "";

    return (
      wallet.slice(0, 6) +
      "..." +
      wallet.slice(-4)
    );
  }

  return (
    <section className="support-section">

      {/* Header */}
      <div className="support-header">
        <h2>☕ Latest Supporters</h2>
        <p>People who supported the creator</p>
      </div>

      {/* Cards */}
      {tips.length === 0 ? (
        <div className="empty-support">
          <h3>No supporters yet ☕</h3>
          <p>Be the first one to support the creator!</p>
        </div>
      ) : (
        <div className="support-grid">
          {tips.map((tip) => (
            <div
              className="support-card"
              key={tip.sender}
            >

              {/* User */}
              <div className="support-user">

                <div className="avatar">
                  {tip.sender?.slice(2, 3).toUpperCase()}
                </div>

                <div>
                  <h4>Supporter</h4>

                  <span>
                    {shorten(tip.sender)}
                  </span>
                </div>

              </div>

              {/* Amount */}
              <div className="amount">
                ☕ {formatEther(tip.amount)} ETH
              </div>

              {/* Message */}
              {tip.note && (
                <p className="message">
                  "{tip.note}"
                </p>
              )}

            </div>
          ))}
        </div>
      )}

    </section>
  );
}