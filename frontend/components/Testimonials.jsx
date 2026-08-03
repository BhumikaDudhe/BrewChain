const reviews = [
  {
    name: "Alex Johnson",
    role: "Content Creator",
    review:
      "This platform made it super easy for my audience to support me with crypto. The experience is smooth and secure."
  },
  {
    name: "Sarah Lee",
    role: "Coffee Lover",
    review:
      "I loved how simple the payment process was. Connecting MetaMask took just a few seconds."
  },
  {
    name: "David Miller",
    role: "Developer",
    review:
      "Beautiful UI and blockchain integration. It feels modern and trustworthy."
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials">

      <h2>What Our Users Say</h2>

      <p className="testimonial-subtitle">
        Trusted by creators and coffee lovers worldwide.
      </p>

      <div className="testimonial-grid">

        {reviews.map((item, index) => (

          <div className="testimonial-card" key={index}>

            <div className="avatar">
              {item.name.charAt(0)}
            </div>

            <h3>{item.name}</h3>

            <h5>{item.role}</h5>

            <p>{item.review}</p>

          </div>

        ))}

      </div>

    </section>
  );
}