import "../index.css";
import { Link } from "react-router-dom";
function Dashboard({
  addCourse,
  deleteCourse,
  updateCourse,
  courses,
  course,
  setCourse,
  setCourses,
}) {
  return (
    <div className="col m-5 dashboard">
      <h1>Dashboard</h1>
      <input
        type="text"
        value={course.name}
        onChange={(e) => {
          setCourse({ ...course, name: e.target.value });
        }}
      />
      <button className="wd-btn" OnClick={() => updateCourse(course)}>Update</button>
      <button className="wd-btn" OnClick={addCourse}>Add</button>
      <div className="card-container d-flex flex-row flex-wrap">
        {courses.map((course, index) => (
          <div className="card-col">
            <Link
              key={index}
              to={`/Kanbas/Courses/${course._id}`}
              className="card"
            >
              <div className="card-img-top"></div>
              <div className="card-body">
                {course.name}<br />
                {course.startDate}
                <button
                  className="wd-btn " OnClick={(e) => {
                    e.preventDefault();
                    deleteCourse(course);
                  }}
                >
                  Delete
                </button>
                <button
                  className="wd-btn " OnClick={(e) => {
                    e.preventDefault();
                    setCourse(course);
                  }}
                >
                  Edit
                </button>
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
