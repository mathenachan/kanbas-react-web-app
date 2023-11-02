import { useParams } from "react-router";
import CourseNavigation from "../CourseNavigation";
import db from "../Database";
import { Routes, Route } from "react-router-dom";
import Modules from "../Modules";
import Home from "../Home";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/AssignmentEditor";
import { FaBars } from "react-icons/fa";

function Courses({ courses }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);  return (
    <div>
      <div className="header d-none d-md-block">
        <div className="d-flex align-items-center">
          <FaBars className="hamburger red"/>
          <div className="breadcrumb-item bc-course">{course.name}</div>
        </div>
        <hr/>
      </div>
      <div className="row">
        <div className="col">
          <CourseNavigation />
        </div>
        <div className="col">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
      {/* <pre>
        <code>{JSON.stringify(db.courses, null, 2)}</code>
      </pre> */}
    </div>
  );
}

export default Courses;
