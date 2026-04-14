import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getActiveCourses } from "../services/courseService";
import { getCourseImage } from "../utils/courseImages";
import { motion } from "framer-motion";
import Background3D from "../components/Background3D";
import CourseCard from "../components/CourseCard";

function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getActiveCourses().then((res) => {
      if (res.status === "success") setCourses(res.data);
    });
  }, []);

  return (
    <div className="perspective-container">
      <Background3D />
      
      {/* HERO SECTION */}
      <motion.div 
        initial={{ opacity: 0, z: -100 }}
        animate={{ opacity: 1, z: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center py-5 mb-5 d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <motion.div
           initial={{ scale: 0.9, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="fw-bolder floating" style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)", letterSpacing: "-2px" }}>
            Sunbeam Institute of <span className="text-glow" style={{ color: "var(--primary-color)" }}>IT</span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="lead text-muted mx-auto mt-3 mb-5" 
          style={{ maxWidth: "700px", fontSize: "1.3rem", fontWeight: "500" }}
        >
          Elevate your career with industry-focused IT training. Experience our cutting-edge courses transformed for the modern digital era.
        </motion.p>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a href="#courses" className="btn btn-primary rounded-pill px-5 py-3 shadow-lg fw-bold border-0">
            Start Learning Now
          </a>
        </motion.div>
      </motion.div>

      {/* COURSES SECTION */}
      <div id="courses" className="container mt-5 pt-5 pb-5">
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-5 fw-bold text-glow" 
          style={{ fontSize: "2.5rem" }}
        >
          Interactive Courses
        </motion.h3>

        <div className="row justify-content-center g-4">
        {courses.map((course, index) => (
          <CourseCard 
            key={course.id} 
            id={course.id} 
            title={course.courseName} 
            fee={course.fees || 0}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Home;
