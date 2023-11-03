import "../index.css";
import { Link } from "react-router-dom";
function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
  
) {
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
      <button className="wd-btn" OnClick={addNewCourse}>Add</button>
      <div className="card-container d-flex flex-row flex-wrap">
        {courses.map((course, index) => (
          <div className="card-col">

            <div className="card">

              <div className={`card-img-top ${course.color}`}></div>
              <div className="card-body">
                <Link key={index}
                  to={`/Kanbas/Courses/${course._id}`} className="wd-card-text">
                  <div className={`wd-card-title ${course.textcolor}`}>{course.name}</div>
                  <div className="section">{course.section}</div>
                  <div className="term">{course.term}</div>
                </Link>
                <button
                  className="wd-btn " OnClick={(e) => {
                    e.preventDefault();
                    deleteCourse(course._id);
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
            </div>
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
