import React, { useEffect } from "react";
import Anavbar from "../comman/Anavbar";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../../Slicedata/AdminSlice";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { users, loading } = useSelector((state) => state.users);
  const dishpatch = useDispatch();
  useEffect(() => {
    dishpatch(showUser());
  }, []);

  return (
    <>
      <Anavbar />
      <h1 className="text-center mt-5">Dashboard</h1>
      <div className="container my-5">
        <div className="card shadow border-0">
          <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
            <h4 className="mb-0">User Management</h4>
            <Link to="/adduser">
              <button className="btn btn-light text-primary fw-semibold d-flex align-items-center gap-2">
                <i className="bi bi-person-plus" /> Add User
              </button>
            </Link>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle mb-0">
              <thead className="table-primary text-center">
                <tr>
                  <th>ID</th>
                  <th>User Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Example row */}
                {users &&
                  users.map((euser, index) => {
                    const { name, id, img, email, username } = euser;
                    return (
                      <tr key={index}>
                        <td className="text-center fw-bold">{id}</td>
                        <td className="text-center">
                          <img
                            src={img}
                            alt="User"
                            className="rounded-circle border shadow-sm"
                            width={50}
                            height={50}
                          />
                        </td>
                        <td>{name}</td>
                        <td>{username}</td>
                        <td>{email}</td>
                        <td className="text-center">
                          <Link to={`/edituser/${id}`}>
                            <button className="btn btn-sm btn-warning me-2 d-inline-flex align-items-center gap-1">
                              <i className="bi bi-pencil-square" /> Edit
                            </button>
                          </Link>
                          <button
                            onClick={() => dishpatch(deleteUser(id))}
                            className="btn btn-sm btn-danger d-inline-flex align-items-center gap-1"
                          >
                            <i className="bi bi-trash" /> Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                {/* Add more rows dynamically */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
