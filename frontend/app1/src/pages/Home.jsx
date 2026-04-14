import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getActiveCourses } from "../services/courseService";
import { getCourseImage } from "../utils/courseImages";

function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getActiveCourses().then((res) => {
      if (res.status === "success") setCourses(res.data);
    });
  }, []);

  return (
    <>
      <div className="text-center animate-fade-in-up py-5 mb-5" style={{ background: "transparent", minHeight: "45vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h1 className="fw-bolder" style={{ fontSize: "3.5rem", letterSpacing: "-1px" }}>
          Sunbeam Institute of <span style={{ color: "var(--primary-color)" }}>IT</span>
        </h1>
        <p className="lead text-muted mx-auto mt-3 mb-5" style={{ maxWidth: "600px", fontSize: "1.25rem" }}>
          Industry focused IT training with strong placement support. Start your journey with our cutting-edge courses today.
        </p>
        <div>
          <a href="#courses" className="btn btn-outline-primary rounded-pill px-4 py-2 shadow-sm fw-bold">
            Explore Courses <i className="bi bi-arrow-down ms-1"></i> ↓
          </a>
        </div>
      </div>

      <div id="courses" className="container mt-5 pt-4">
        <h3 className="text-center mb-5 fw-bold" style={{ fontSize: "2rem" }}>Available Courses</h3>

        <div className="row justify-content-center">
        {courses.map((course) => (
          <div key={course.id} className="col-md-3 mb-4">
            <div className="card shadow-sm h-100 text-center">
              <img
              src={getCourseImage(course.courseName)}
              className="card-img-top"
              style={{ height: "180px", objectFit: "cover" }}
              alt={course.courseName}
            />

              <div className="card-body d-flex flex-column">
                <h5 className="fw-bold text-dark mb-2">{course.courseName}</h5>
                <p className="text-muted fw-semibold mb-4" style={{ fontSize: "0.85rem" }}>
                  <i className="bi bi-calendar-event me-1"></i>
                  Starts: {new Date(course.startDate).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}
                </p>
                <div className="mt-auto">
                  <Link
                    to={`/course/${course.id}`}
                    className="btn btn-primary w-100 fw-bold shadow-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Home;
