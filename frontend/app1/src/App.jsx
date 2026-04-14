import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "./components/Layout";
import AdminRoute from "./components/AdminRoute";
import AdminLayout from "./components/AdminLayout";

// STUDENT
import Home from "./pages/Home";
import About from "./pages/About";
import CourseDetails from "./pages/CourseDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyCourses from "./pages/MyCourses";
import VideoPlayer from "./pages/VideoPlayer";
import RegistrationForm from "./pages/RegistrationForm";
import AdminAllVideos from "./pages/admin/AdminAllVideos";
import AdminAddCourse from "./pages/admin/AdminAddCourse";
import AdminUpdateCourse from "./pages/admin/AdminUpdateCourse";
// ADMIN
import AdminHome from "./pages/admin/AdminHome";
import AdminCourses from "./pages/admin/AdminCourses";
import AdminStudents from "./pages/admin/AdminStudents";
import AdminDeleteCourse from "./pages/admin/AdminDeleteCourse";
import AdminEditVideo from "./pages/admin/AdminEditVideo";
import AdminAddVideo from "./pages/admin/AdminAddVideo";
import UpdateProfile from "./pages/profile/UpdateProfile";

import ChangePassword from "./pages/profile/ChangePassword";

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        {/* ================= STUDENT ================= */}
        <Route path="/" element={<Layout><PageWrapper><Home /></PageWrapper></Layout>} />
        <Route path="/about" element={<Layout><PageWrapper><About /></PageWrapper></Layout>} />
        <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
        <Route path="/register" element={<PageWrapper><Register /></PageWrapper>} />
        <Route path="/course/:id" element={<Layout><PageWrapper><CourseDetails /></PageWrapper></Layout>} />
        <Route path="/register/:courseId" element={<Layout><PageWrapper><RegistrationForm /></PageWrapper></Layout>} />
        <Route path="/my-courses" element={<Layout><PageWrapper><MyCourses /></PageWrapper></Layout>} />
        <Route path="/video/:id" element={<Layout><PageWrapper><VideoPlayer /></PageWrapper></Layout>} />
        <Route path="/profile/update" element={<PageWrapper><UpdateProfile /></PageWrapper>} />
        <Route path="/profile/change-password" element={<PageWrapper><ChangePassword /></PageWrapper>} />

        {/* ================= ADMIN ================= */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Navigate to="/home" replace />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/course/add"
          element={
            <AdminRoute>
              <Layout>
                <PageWrapper><AdminAddCourse /></PageWrapper>
              </Layout>
            </AdminRoute>
          }
        />

        <Route
          path="/admin/courses"
          element={
            <AdminRoute>
              <AdminLayout>
                <PageWrapper><AdminCourses /></PageWrapper>
              </AdminLayout>
            </AdminRoute>
          }
        />

        <Route
          path="/admin/students"
          element={
            <AdminRoute>
              <AdminLayout>
                <PageWrapper><AdminStudents /></PageWrapper>
              </AdminLayout>
            </AdminRoute>
          }
        />

        <Route
          path="/admin/course/update"
          element={
            <AdminRoute>
              <AdminLayout>
                <PageWrapper><AdminUpdateCourse /></PageWrapper>
              </AdminLayout>
            </AdminRoute>
          }
        />

        <Route
          path="/admin/course/delete"
          element={
            <AdminRoute>
              <AdminLayout>
                <PageWrapper><AdminDeleteCourse /></PageWrapper>
              </AdminLayout>
            </AdminRoute>
          }
        />
        <Route
          path="/admin/videos"
          element={
            <AdminRoute>
              <AdminLayout>
                <PageWrapper><AdminAllVideos /></PageWrapper>
              </AdminLayout>
            </AdminRoute>
          }
        />
        <Route path="/admin/video/add" element={<PageWrapper><AdminAddVideo /></PageWrapper>} />
        <Route
          path="/admin/video/edit/:id"
          element={
            <AdminRoute>
              <Layout>
                <PageWrapper><AdminEditVideo /></PageWrapper>
              </Layout>
            </AdminRoute>
          }
        />
        <Route path="/admin/course/update/:id" element={<PageWrapper><AdminUpdateCourse /></PageWrapper>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
