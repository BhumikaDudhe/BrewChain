"use client";

export default function TransactionPopup({
  open,
  status,
  amount,
  hash,
  message,
  onClose,
}) {
  if (!open) return null;

  const success = status === "success";
  const rejected = status === "rejected";

  const heading = success
    ? "Coffee Delivered!"
    : rejected
    ? "Transaction Cancelled"
    : "Transaction Failed";

  const body = success
    ? "Your creator received a coffee successfully."
    : rejected
    ? "You declined the request in your wallet — no charge was made."
    : (message || "Something went wrong. Please try again.");

  const icon = success ? "☕" : rejected ? "🙅" : "❌";

  return (
    <div className="popup-overlay">

      <div className="transaction-popup">

        <div className="popup-icon">
          {icon}
        </div>

        <h2>
          {heading}
        </h2>

        <p className="popup-message">
          {body}
        </p>

        {success && (
          <>

            <div className="popup-row">
              <span>Amount</span>
              <strong>{amount}</strong>
            </div>

            <div className="popup-row">
              <span>Transaction</span>

              <a
                href={`https://sepolia.etherscan.io/tx/${hash}`}
                target="_blank"
                rel="noreferrer"
              >
                View ↗
              </a>

            </div>

          </>
        )}

        <button
          className="popup-btn"
          onClick={onClose}
        >
          Continue
        </button>

      </div>

    </div>
  );
}