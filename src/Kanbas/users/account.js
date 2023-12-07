import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
  };
  useEffect(() => {
    fetchAccount();
  }, []);
  return (
    <div className=" container w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <input className="form-control" type="password" value={account.password}
            onChange={(e) => setAccount({ ...account,
              password: e.target.value })}/>
          <input className="form-control" value={account.firstName}
            onChange={(e) => setAccount({ ...account,
              firstName: e.target.value })}/>
          <input className="form-control" value={account.lastName}
            onChange={(e) => setAccount({ ...account,
              lastName: e.target.value })}/>
          <input className="form-control" type="date" value={account.dob}
            onChange={(e) => setAccount({ ...account,
              dob: e.target.value })}/>
          <input className="form-control" value={account.email}
            onChange={(e) => setAccount({ ...account,
              email: e.target.value })}/>
          <select className="form-control" onChange={(e) => setAccount({ ...account,
              role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button className="btn btn-primary w-100" onClick={save}>
     Save
  </button>
  <Link to="../admin/users" className="btn btn-warning w-100">
    Users
  </Link>
        </div>
      )}
    </div>
  );
}
export default Account;