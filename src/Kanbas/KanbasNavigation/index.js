import { Link, useLocation } from "react-router-dom";
import { FaBook, FaDesktop, FaInbox, FaRegCalendarAlt, FaRegClock, FaRegQuestionCircle, FaRegUserCircle, FaSignOutAlt, FaTachometerAlt } from "react-icons/fa";
import logo from "./NU_RGB_Notched-N_motto_RW.png";
function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const icons = [<FaRegUserCircle size={28}/>, <FaTachometerAlt size={28} className="red"/>, <FaBook size={28} className="red"/>, <FaRegCalendarAlt size={28} className="red"/>, <FaInbox size={28} className="red"/>, <FaRegClock size={28} className="red"/>, <FaDesktop size={28} className="red"/>, <FaSignOutAlt size={28} className="red"/>, <FaRegQuestionCircle size={28} className="red"/>];
    const { pathname } = useLocation();
    return (
        <div className="kanbas-nav-container d-none d-md-block">
            <div className="kanbas-nav">
                <div className="nav-item nav-button logo-container">
                    <Link to="/Kanbas">
                        <img src={logo} className="neu-logo"/>
                    </Link>
                </div>
                {links.map((link, index) => (

                    <div className={`nav-item nav-button ${pathname.includes(link) && "nav-active"}`}>
                        <Link className={`nav-link ${pathname.includes(link) && "nav-active"}`}
                            key={index}
                            to={`/Kanbas/${link}`}>
                            {icons[index]}<br/>
                            {link}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default KanbasNavigation;