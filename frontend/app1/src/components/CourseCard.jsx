import { Link } from "react-router-dom";
import { getCourseImage } from "../utils/courseImages";

function CourseCard({ id, title, fee }) {
  return (
    <div className="col-md-4 mt-3">
      <div className="card shadow h-100">
        <img
          src={getCourseImage(title)}
          className="card-img-top"
          style={{ height: "180px", objectFit: "cover" }}
          alt={title}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="fw-bold text-dark mb-2">{title}</h5>
          <p className="text-muted fw-semibold mb-4" style={{ fontSize: "0.9rem" }}>
            <span className="badge bg-light text-dark border me-1">Fees</span>
            ₹{fee.toLocaleString()}
          </p>

          <div className="mt-auto">
            <Link to={`/course/${id}`} className="btn btn-primary w-100 fw-bold shadow-sm">
              View Course
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
