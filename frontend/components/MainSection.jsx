export default function MainSection() {

  return (
    <section className="main-section">

      <div className="left-column">

        <div className="block transaction-card">

    <h2>Live Transaction</h2>

    <p className="subtitle">
        Beautiful blockchain dashboard.
    </p>

    <div className="dashboard">

        <div className="dashboard-top">
            Dashboard
        </div>

        <div className="dashboard-body">

            <div className="row">
                <span>Wallet</span>
                <span>0x7F...A1D0</span>
            </div>

            <div className="row">
                <span>ETH</span>
                <span>0.002</span>
            </div>

            <div className="row">
                <span>Network</span>
                <span>Sepolia</span>
            </div>

            <hr/>

            <div className="row">
                <span>Coffee Purchase</span>

                <span className="success">
                    Success
                </span>
            </div>

            <div className="row">
                <span>Creator Tip</span>

                <span className="success">
                    Success
                </span>
            </div>

        </div>

    </div>

</div>

        <div className="block how-block">

  <h2>How It Works</h2>

  <p className="subtitle">
    Elegant steps with elegant transactions.
  </p>

  <div className="timeline">

    <div className="timeline-line"></div>

    <div className="timeline-step">
      <div className="circle">👛</div>
      <span>Connect Wallet</span>
    </div>

    <div className="timeline-step">
      <div className="circle">☕</div>
      <span>Choose Coffee</span>
    </div>

    <div className="timeline-step">
      <div className="circle">🦊</div>
      <span>Confirm MetaMask</span>
    </div>

    <div className="timeline-step">
      <div className="circle">💸</div>
      <span>Creator Receives</span>
    </div>

  </div>

</div>

      </div>

      <div className="right-column">

        <div className="block packages-block">

  <h2>Coming Soon</h2>

  <p className="subtitle">
    Premium loading page, mockups and exciting new features.
  </p>

  <h3 className="package-title">
    Coffee Packages
  </h3>

  <div className="mini-packages">

    <div className="mini-card">

      <div className="coffee-icon">☕</div>

      <h4>Small</h4>

      <p>0.001 ETH</p>

      <button>Buy Coffee</button>

    </div>

    <div className="mini-card">

      <div className="coffee-icon">☕☕</div>

      <h4>Medium</h4>

      <p>0.003 ETH</p>

      <button>Buy Coffee</button>

    </div>

    <div className="mini-card">

      <div className="coffee-icon">☕☕☕</div>

      <h4>Premium</h4>

      <p>0.01 ETH</p>

      <button>Buy Coffee</button>

    </div>

  </div>

</div>

       <div className="block dashboard-preview">

  <h2>Dashboard Preview</h2>

  <p className="subtitle">
    Analytics and blockchain insights.
  </p>

  <div className="stats-grid">

    <div className="stat-card">
      <h4>Total Coffees</h4>
      <span>125</span>
    </div>

    <div className="stat-card">
      <h4>ETH Received</h4>
      <span>2.35 ETH</span>
    </div>

    <div className="stat-card">
      <h4>Creators</h4>
      <span>48</span>
    </div>

    <div className="stat-card">
      <h4>Success Rate</h4>
      <span>99%</span>
    </div>

  </div>

  

</div>
      </div>

      <div
  className="bubble"
  style={{
    width: "70px",
    height: "70px",
    top: "120px",
    left: "-35px",
  }}
></div>

<div
  className="bubble"
  style={{
    width: "40px",
    height: "40px",
    top: "520px",
    right: "-15px",
  }}
></div>

<div
  className="bubble"
  style={{
    width: "60px",
    height: "60px",
    bottom: "180px",
    left: "40%",
  }}
></div>

<div
  className="bubble"
  style={{
    width: "90px",
    height: "90px",
    bottom: "-40px",
    right: "-20px",
  }}
></div>

    </section>
  );
}