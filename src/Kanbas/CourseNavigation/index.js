import { Link, useParams, useLocation } from "react-router-dom";

function CourseNavigation() {
  const links = ["Home", "Modules", "Assignments", "Grades"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="second-nav-container">
      <div className="second-nav" style={{ width: 150 }}>
        {links.map((link, index) => (
          <div className="second-nav-link-container">
            <Link
              key={index}
              to={`/Kanbas/Courses/${courseId}/${link}`}
              className={`second-nav-link link ${pathname.includes(link) && "active"}`}
            >
              {link}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseNavigation;
