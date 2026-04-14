import { Link } from "react-router-dom";
import { getCourseImage } from "../utils/courseImages";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function CourseCard({ id, title, fee }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="col-md-4 mt-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="card h-100 shadow-2xl glass-card border-0"
      >
        <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
          <img
            src={getCourseImage(title)}
            className="card-img-top p-2"
            style={{ height: "220px", objectFit: "cover", borderRadius: "20px" }}
            alt={title}
          />
        </div>

        <div className="card-body d-flex flex-column" style={{ transform: "translateZ(30px)", background: "linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 0.8) 100%)" }}>
          <h4 className="fw-bold text-white mb-2 text-glow" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>{title}</h4>

          <div className="d-flex align-items-center mb-4 mt-2">
            <div className="d-flex flex-column">
              <span className="text-white opacity-50 small text-uppercase fw-bold" style={{ fontSize: "0.7rem", letterSpacing: "1px" }}>Course Fee</span>
              <span className="h3 fw-bold text-white mb-0 text-glow" style={{ color: "var(--secondary-color)" }}>
                ₹{Number(fee).toLocaleString()}
              </span>
            </div>
          </div>

          <div className="mt-auto">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to={`/course/${id}`} className="btn btn-primary w-100 fw-bold rounded-pill py-3 shadow-lg" style={{ background: "linear-gradient(135deg, var(--primary-color), #6366f1)" }}>
                View Details
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default CourseCard;
