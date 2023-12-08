import { Link } from "react-router-dom";


function ProjNav() {
 return (
   <nav className="nav nav-tabs mb-2">
     <Link className="nav-link" to="/Project/home">
       Home</Link>
     <Link className="nav-link" to="/Project/search">
       Search</Link>
     <Link className="nav-link" to="/Project/signin">
       Signin</Link>
     <Link className="nav-link" to="/Project/signup">
       Signup</Link>
      <Link className="nav-link" to="/Project/account">
       Account</Link>
   </nav>
 );
}


export default ProjNav;