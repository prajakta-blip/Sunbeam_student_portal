import img1 from "../assets/sunbeam1.png";
import img2 from "../assets/sunbeam2.png";
import img3 from "../assets/sunbeam3.png";
import ImageScroller from "../components/ImageScroller";

function Landing() {
  return (
    <div className="container mt-5 text-center px-3 animate-fade-in-up">
      <div className="py-5">
        <h1 className="fw-bolder" style={{ fontSize: "3.5rem", letterSpacing: "-1px" }}>
          Sunbeam Institute of <span style={{ color: "var(--primary-color)" }}>IT</span>
        </h1>

        <p className="lead text-muted mx-auto mt-3 mb-5" style={{ maxWidth: "600px", fontSize: "1.25rem" }}>
          Industry focused IT training with strong placement support. Start your journey with our cutting-edge courses today.
        </p>
      </div>

      <ImageScroller images={[img1, img2, img3]} />
    </div>
  );
}

export default Landing;
