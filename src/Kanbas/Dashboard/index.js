import db from "../Database";
// import "./index.css";
import { Link } from "react-router-dom";
function Dashboard() {
  const courses = db.courses;
  return (
    <div className="col m-5 dashboard">
      <h1>Dashboard</h1>
      <div className="row-cols-4 card-container d-flex flex-row flex-wrap">
        {courses.map((course, index) => (
          <div className="card-col">
            <Link
              key={index}
              to={`/Kanbas/Courses/${course._id}`}
              className="card"
            >
              <div className="card-img-top"></div>
              <div className="card-body">
                {course.name}<br/>
                {course.startDate}
              </div>
            </Link>
          </div>
        ))}
      </div>
      {/* <pre>
        <code>{JSON.stringify(courses, null, 2)}</code>
      </pre> */}
    </div>
  );
}

export default Dashboard;
