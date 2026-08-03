import Features from "./Features";
import Transaction from "./Transaction";
import HowItWorks from "./HowItWorks";
import Packages from "./Packages";
import Testimonials from "./Testimonials";

export default function HomeLayout() {
  return (
    <section className="home-layout">

      <div className="grid-row">

        <div className="grid-item">
          <Features />
        </div>

        <div className="grid-item">
          <Transaction />
        </div>

      </div>

      <div className="grid-row">

        <div className="grid-item">
          <HowItWorks />
        </div>

        <div className="grid-item">
          <Packages />
        </div>

      </div>

      <Testimonials />

    </section>
  );
}