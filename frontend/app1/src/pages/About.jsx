import img1 from "../assets/sunbeam1.png";
import img2 from "../assets/sunbeam2.png";
import img3 from "../assets/sunbeam3.png";
import ImageScroller from "../components/ImageScroller";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="container mt-4 pb-5">
      <h2 className="mb-3 text-glow">Sunbeam Institute of Information Technology</h2>

      <p className="lead opacity-75">
        The Sunbeam campus at Rajiv Gandhi Infotech Park, Hinjawadi is spread over
        an area of 1 Acre which includes 70,000 sq feet of built-up area and a
        5-floor building for C-DAC courses.
      </p>

      <p className="opacity-75">
        The teaching-learning process is facilitated in 3 lecture halls, 5
        computer labs with high-speed Internet connectivity, a seminar room,
        conference room, and library. The entire Sunbeam campus is Wi-Fi enabled.
        Sunbeam also provides hostel facility to girls.
      </p>

      {/* Image Slider */}
      <div className="mt-5 glass-card p-3 rounded-4 shadow-lg mb-5">
        <ImageScroller images={[img1, img2, img3]} />
      </div>

      {/* Footer CONTAINED on About Page */}
      <Footer />
    </div>
  );
}

export default About;
