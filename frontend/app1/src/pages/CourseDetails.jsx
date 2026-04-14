import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCourseById } from "../services/courseService";
import { getCourseImage } from "../utils/courseImages";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  useEffect(() => {
    loadCourse();
  }, [id]);

  const loadCourse = async () => {
    try {
      const res = await getCourseById(id);
      if (res.status === "success") {
        setCourse(res.data);
      } else {
        toast.error("Course not found");
      }
    } catch {
      toast.error("Failed to load course");
    }
  };

  const goToRegistrationForm = () => {
    if (!user) {
      toast.info("Please login to register");
      navigate("/login");
      return;
    }
    navigate(`/register/${id}`);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (!course) return null;

  return (
    <div className="container mt-5 py-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-4 p-md-5 rounded-4 shadow-2xl position-relative overflow-hidden"
      >
        {/* Background Accent */}
        <div className="position-absolute top-0 end-0 p-5 opacity-10 pointer-events-none">
          <div className="rounded-circle bg-primary" style={{ width: "300px", height: "300px", filter: "blur(100px)" }}></div>
        </div>

        <div className="row align-items-center position-relative">
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="perspective-3d"
            >
              <img
                src={getCourseImage(course.courseName)}
                className="img-fluid shadow-lg rounded-4 border border-white border-opacity-10"
                style={{ maxHeight: 400, width: "100%", objectFit: "cover" }}
                alt={course.courseName}
              />
            </motion.div>
          </div>

          <div className="col-lg-6 ps-lg-5">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="fw-bold text-white mb-3 text-glow" style={{ textShadow: "0 2px 15px rgba(0,0,0,0.5)" }}>{course.courseName}</h1>
              <p className="lead text-muted mb-4" style={{ lineHeight: "1.8", color: "rgba(255,255,255,0.7) !important" }}>{course.description}</p>

              <div className="p-4 rounded-4 mb-4 border border-white border-opacity-10" style={{ background: "rgba(15, 23, 42, 0.4)", backdropFilter: "blur(5px)" }}>
                <div className="row g-3">
                  <div className="col-6">
                    <small className="text-white opacity-50 d-block text-uppercase fw-bold mb-1" style={{ letterSpacing: "1px", fontSize: "0.7rem" }}>Start Date</small>
                    <span className="text-white fw-bold h5 mb-0 text-glow">{formatDate(course.startDate)}</span>
                  </div>
                  <div className="col-6">
                    <small className="text-white opacity-50 d-block text-uppercase fw-bold mb-1" style={{ letterSpacing: "1px", fontSize: "0.7rem" }}>End Date</small>
                    <span className="text-white fw-bold h5 mb-0 text-glow">{formatDate(course.endDate)}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-top border-white border-opacity-10">
                  <small className="text-white opacity-50 d-block text-uppercase fw-bold mb-2" style={{ letterSpacing: "1px", fontSize: "0.7rem" }}>Registration Fee</small>
                  <div className="d-flex align-items-baseline">
                    <span className="h1 fw-bold text-white mb-0 text-glow" style={{ color: "var(--secondary-color)" }}>₹{Number(course.fees).toLocaleString()}</span>
                    <span className="ms-2 text-white opacity-25 small">incl. all taxes</span>
                  </div>
                </div>
              </div>

              <div className="d-grid gap-3 mt-5">
                {user?.role === "ADMIN" ? (
                  <button className="btn btn-secondary py-3 rounded-pill fw-bold opacity-50" disabled>
                    Admin Account - Registration Disabled
                  </button>
                ) : user?.role === "STUDENT" ? (
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn btn-primary py-3 rounded-pill fw-bold shadow-lg"
                    onClick={goToRegistrationForm}
                    style={{ background: "linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)", border: "none" }}
                  >
                    🚀 Enroll Now
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn btn-primary py-3 rounded-pill fw-bold shadow-lg"
                    onClick={() => navigate("/login")}
                    style={{ background: "linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)", border: "none" }}
                  >
                    Please Login to Enroll
                  </motion.button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CourseDetails;
