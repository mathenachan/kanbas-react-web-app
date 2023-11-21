import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import CourseNavigation from "../CourseNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Modules from "../Modules";
import Home from "../Home";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/AssignmentEditor";
import { FaBars } from "react-icons/fa";

function Courses() {
  const { courseId } = useParams();
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };

  // const course = courses.find((course) => course._id === courseId);  
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div>
      <div className="header d-none d-md-block">
        <div className="d-flex align-items-center" style={{ "--bs-breadcrumb-divider": "'>'" }}>
          <FaBars className="hamburger red"/>
          <div className="breadcrumb-item bc-course">{course.name}</div>
        </div>
        <hr/>
      </div>
      <div className="row g-0">
        
          <CourseNavigation />
        
        <div className="col d-flex flex-column px-4">
          <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
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
