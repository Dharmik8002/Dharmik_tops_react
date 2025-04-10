// Task 2:Create a list of users where each user has a unique id. Render the user list using
// React and assign a unique key to each user.

import React from "react";

const users = [
  { id: 1, name: "Dharmik Modi", age: 23 },
  { id: 2, name: "Rahul Gohel", age: 22 },
  { id: 3, name: "Divyang Thakker", age: 30 },
  { id: 4, name: "Dhurvil Dave", age: 22 },
  { id: 5, name: "Yug Patel", age: 23 },
];

const User = () => {
  return (
    <>
      <div className="conatiner my-4">
        <h1>User table</h1>
        <table className="table table-striped table-bordered w-50 mx-auto">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
