import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MainSection from "../components/MainSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MainSection />
      <Testimonials />
      <Footer />
    </>
  );
}