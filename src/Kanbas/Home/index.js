import ModuleList from "../Modules/ModuleList";
import { FaBan, FaRegCalendar, FaCheckCircle, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="row d-flex">
      <div className="col d-flex flex-column px-4">
        <h1>Home</h1>
        <ModuleList />
      </div>
      <div className="right-sidebar d-none d-xl-block" style={{ width: 300 }}>
        <h5>Course Status</h5>
        <button className="wd-btn">
          <FaBan className="pe-1" />Unpublish
        </button>
        <button className="wd-btn" style={{color:'white', backgroundColor:'green'}} disabled>
          <FaCheckCircle style={{ color: 'white' }} />
          Published</button>

        <div className="course-status-opt">
          <button className="wd-btn course-status-btn">Import Existing Content</button>
          <button className="wd-btn course-status-btn">Import From Commons</button>
          <button className="wd-btn course-status-btn">Choose Home Page</button>
          <button className="wd-btn course-status-btn">View Course Stream</button>
          <button className="wd-btn course-status-btn">New Announcement</button>
          <button className="wd-btn course-status-btn">New Analytics</button>
          <button className="wd-btn course-status-btn">View Course Notifications</button>
        </div >

        <div className="coming-up">
          <div className="d-flex flex-row align-items-center justify-content-between">
            <h5 className="coming-up-title">Coming Up</h5>
            <div>
              <FaRegCalendar/>
              <Link className="link" to="#">View Calendar</Link>
            </div>
          </div>
          <hr></hr>
        </div>
        <ul className="coming-up-ul">
          <div className="d-flex flex-row">
            <FaRegCalendar/>
            <Link className="link coming-up-item" to="#">Lecture
              <div className="term card-text">CS4550.12631.202410 <br /> Sep 7 at 11:45am</div>
            </Link>
          </div>
          <div className="d-flex flex-row">
            <FaRegCalendar/>
            <Link className="link coming-up-item" to="#">
              Lecture
              <div className="term card-text">
                CS4550.12631.202410<br />
                Sep 11 at 11:45am</div>
            </Link>
          </div>
          <div className="d-flex flex-row">
            <FaRegCalendar/>
            <Link className="link coming-up-item" to="#">
              CS5610 06 SP23 Lecture
              <div className="term card-text">
                CS5610.31752.202410<br />
                Sep 11 at 6pm</div>
            </Link >
          </div>

        </ul >
      </div >
    </div >
  );
}

export default Home;
