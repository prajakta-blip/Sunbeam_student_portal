import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyCoursesWithVideos } from "../services/studentService";

function MyCourses() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMyCoursesWithVideos().then(res => {
      if (res.status === "success") {
        setData(res.data);
      }
    });
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="text-center">My Courses</h3>

      {data.map(item => (
        <div key={item.course.id} className="card mb-3">
          <div className="card-header fw-bold">
            {item.course.courseName}
          </div>

          <div className="card-body">
            <div className="list-group list-group-flush">
              {item.videos.length === 0 && (
                <p className="text-muted mb-0 px-3 py-2">No videos available</p>
              )}

              {item.videos.map(video => (
                <button
                  key={video.id}
                  className="list-group-item list-group-item-action border-0 px-3 py-2 text-primary"
                  style={{ cursor: "pointer", transition: "background-color 0.2s" }}
                  onClick={() =>
                    navigate(`/video/${video.id}`, { state: video })
                  }
                >
                  <span className="me-2">▶</span> {video.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyCourses;
