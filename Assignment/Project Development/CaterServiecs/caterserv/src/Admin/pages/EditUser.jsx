import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "../../Slicedata/AdminSlice";

const EditUser = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { users, loading } = useSelector((state) => state.users);
  const dishpatch = useDispatch();
  const [showEdit, setShowEdit] = useState([]);

  const onEditChange = (e) => {
    setShowEdit({
      ...showEdit,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const singalUser = users.filter((item) => item.id == id);
    setShowEdit(singalUser[0]);
  }, []);

  const handalSubmitEditForm = (e) => {
    e.preventDefault();
    try {
      dishpatch(editUser(showEdit));
      navigate("/dash");
    } catch (error) {
      console.log("api not found", error);
    }
  };
  return (
    <>
      <div className="container my-5">
        <div className="card shadow border-0">
          <div className="card-header bg-warning text-dark">
            <h4 className="mb-0">Update User</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handalSubmitEditForm}>
              <div className="row g-3">
                {/* Hidden ID field (read-only or hidden input) */}
                <input type="hidden" id="userId" name="id" defaultValue={1} />
                {/* Name */}
                <div className="col-md-6">
                  <label htmlFor="fullname" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    defaultValue="John Doe"
                    name="name"
                    value={showEdit && showEdit.name}
                    onChange={onEditChange}
                    required
                  />
                </div>
                {/* username */}
                <div className="col-md-6">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    defaultValue="John Doe"
                    name="username"
                    value={showEdit && showEdit.username}
                    onChange={onEditChange}
                    required
                  />
                </div>
                {/* Email */}
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    defaultValue="john@example.com"
                    name="email"
                    value={showEdit && showEdit.email}
                    onChange={onEditChange}
                    required
                  />
                </div>
                {/* Password */}
                <div className="col-md-6">
                  <label htmlFor="password" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Leave blank to keep current"
                    value={showEdit && showEdit.password}
                    onChange={onEditChange}
                  />
                </div>

                {/* Upload New Image */}
                <div className="col-md-6">
                  <label htmlFor="image" className="form-label">
                    Upload New Image
                  </label>
                  <input
                    className="form-control"
                    type="url"
                    id="image"
                    accept="image/*"
                    name="img"
                    value={showEdit && showEdit.img}
                    onChange={onEditChange}
                  />
                </div>
              </div>
              {/* Submit Button */}
              <div className="mt-4">
                <button type="submit" className="btn btn-warning">
                  <i className="bi bi-save me-1" /> Update User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;
