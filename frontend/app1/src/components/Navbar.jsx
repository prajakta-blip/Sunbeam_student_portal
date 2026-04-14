import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/sunbeam-logo.png";
import { motion } from "framer-motion";

function Navbar() {
  const navigate = useNavigate();

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const goHome = () => {
    if (user?.role === "ADMIN") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="navbar navbar-expand-lg glass-nav sticky-top px-4 shadow-lg"
      style={{ borderBottom: "1px solid var(--glass-border)", background: "rgba(15, 23, 42, 0.8)", backdropFilter: "blur(12px)" }}
    >
      <div className="container-fluid">
        {/* LOGO */}
        <motion.button
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          className="navbar-brand d-flex align-items-center btn btn-link text-white text-decoration-none"
          onClick={goHome}
        >
          <img src={logo} height="35" className="me-2" alt="Sunbeam" />
          <strong className="text-glow" style={{ fontSize: "1.4rem", letterSpacing: "1px" }}>SUNBEAM</strong>
        </motion.button>

        {/* LEFT MENU */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <motion.li className="nav-item" whileHover={{ y: -2 }}>
            <button
              className="nav-link btn btn-link text-white text-decoration-none fw-bold"
              onClick={goHome}
            >
              Home
            </button>
          </motion.li>

          <motion.li className="nav-item" whileHover={{ y: -2 }}>
            <Link className="nav-link fw-bold text-white px-3" to="/about">
              About
            </Link>
          </motion.li>

          {user?.role === "STUDENT" && (
            <motion.li className="nav-item" whileHover={{ y: -2 }}>
              <Link className="nav-link fw-bold text-white px-3" to="/my-courses">
                My Courses
              </Link>
            </motion.li>
          )}
        </ul>

        {/* RIGHT BUTTON */}
        <div className="d-flex align-items-center gap-3">
          {!user ? (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link className="btn btn-primary rounded-pill px-4 fw-bold shadow-lg" to="/login" style={{ background: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))", border: "none" }}>
                Login
              </Link>
            </motion.div>
          ) : (
            <div className="d-flex align-items-center gap-3">
              <span className="text-white opacity-75 small d-none d-md-inline">Logged in as: <strong className="text-glow">{user.name}</strong></span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline-danger btn-sm rounded-pill px-3 fw-bold shadow-sm"
                onClick={logout}
              >
                Logout
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
