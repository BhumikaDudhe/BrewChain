"use client";

export default function TransactionPopup({
  open,
  status,
 amount,
  hash,
  onClose,
}) {
  if (!open) return null;

  const success = status === "success";

  return (
    <div className="popup-overlay">

      <div className="transaction-popup">

        <div className="popup-icon">
          {success ? "☕" : "❌"}
        </div>

        <h2>
          {success
            ? "Coffee Delivered!"
            : "Transaction Failed"}
        </h2>

        <p className="popup-message">
          {success
            ? "Your creator received a coffee successfully."
            : "Something went wrong."}
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