import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function AdminNavbar() {
  const navigate = useNavigate();

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const name = user?.name || user?.email || "Admin";

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="navbar navbar-expand-lg px-4 sticky-top"
      style={{
        background: "rgba(15, 23, 42, 0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--glass-border)",
        top: "70px",
        zIndex: 999,
        boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
      }}
    >
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <motion.li className="nav-item" whileHover={{ x: 5 }}>
            <Link className="nav-link fw-bold text-white opacity-75" to="/admin">
              <span className="me-1">📊</span> Dashboard
            </Link>
          </motion.li>

          {/* COURSES */}
          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle btn btn-link text-white fw-bold opacity-75"
              data-bs-toggle="dropdown"
              type="button"
            >
              <span className="me-1">📚</span> Courses
            </button>

            <ul className="dropdown-menu border-0 shadow-2xl mt-2" style={{ background: "rgba(15, 23, 42, 0.98)", border: "1px solid var(--glass-border) !important" }}>
              <li><Link className="dropdown-item text-white py-2" to="/admin/courses">Get All Courses</Link></li>
              <li><Link className="dropdown-item text-white py-2" to="/admin/course/add">Add Course</Link></li>
              <li><Link className="dropdown-item text-white py-2" to="/admin/course/update">Update Course</Link></li>
              <li><hr className="dropdown-divider opacity-10" /></li>
              <li><Link className="dropdown-item text-danger fw-bold py-2" to="/admin/course/delete">Delete Course</Link></li>
            </ul>
          </li>

          {/* VIDEOS */}
          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle btn btn-link text-white fw-bold opacity-75"
              data-bs-toggle="dropdown"
              type="button"
            >
              <span className="me-1">🎥</span> Videos
            </button>

            <ul className="dropdown-menu border-0 shadow-2xl mt-2" style={{ background: "rgba(15, 23, 42, 0.98)", border: "1px solid var(--glass-border) !important" }}>
              <li><Link className="dropdown-item text-white py-2" to="/admin/videos">Get All Videos</Link></li>
              <li><Link className="dropdown-item text-white py-2" to="/admin/video/add">Add Video</Link></li>
            </ul>
          </li>

          <motion.li className="nav-item" whileHover={{ x: 5 }}>
            <Link className="nav-link fw-bold text-white opacity-75" to="/admin/students">
              <span className="me-1">🎓</span> Students
            </Link>
          </motion.li>
        </ul>

        {/* PROFILE SECTION */}
        <div className="dropdown">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-outline-light rounded-pill px-4 fw-bold dropdown-toggle shadow-sm"
            data-bs-toggle="dropdown"
            type="button"
            style={{
              borderColor: "var(--primary-color)",
              background: "rgba(255,255,255,0.05)",
              boxShadow: "0 0 15px rgba(56, 189, 248, 0.2)"
            }}
          >
            <span className="text-glow">{name}</span>
          </motion.button>

          <ul className="dropdown-menu dropdown-menu-end border-0 shadow-2xl mt-2" style={{ background: "rgba(15, 23, 42, 0.98)", border: "1px solid var(--glass-border) !important" }}>
            <li>
              <button className="dropdown-item text-white py-2" onClick={() => navigate("/profile/update")}>
                Update Profile
              </button>
            </li>
            <li>
              <button className="dropdown-item text-white py-2" onClick={() => navigate("/profile/change-password")}>
                Change Password
              </button>
            </li>
            <li><hr className="dropdown-divider opacity-10" /></li>
            <li>
              <button className="dropdown-item text-danger fw-bold py-2" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
