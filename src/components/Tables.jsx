import React from "react";
import { MdDeleteForever } from "react-icons/md";
import "./Tables.scss";
const Tables = ({ allUsersInfo, userDelete, courseDelete, courses }) => {
  return (
    <>
      <div className="adminOnly">
        <span>All Users Details</span>
        <table>
          <tbody>
            <tr>
              <th>No</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
            {allUsersInfo &&
              allUsersInfo
                .filter((value) => {
                  return value.role !== "admin";
                })
                .map((value, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{value.name}</td>
                      <td>{value.email}</td>
                      <td>{value.role}</td>
                      <td onClick={() => userDelete(value._id)}>
                        <MdDeleteForever />
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
      <div className="adminOnly">
        <span>Active Courses</span>
        <table>
          <tbody>
            <tr>
              {" "}
              <th>No</th>
              <th>Course</th>
              <th>Created By</th>
              <th>Views</th>
            </tr>
            {courses &&
              courses
                .filter((value) => {
                  return value.role !== "admin";
                })
                .map((value, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{value.title}</td>
                      <td>{value.createdBy}</td>
                      <td>{value.views}</td>
                      <td onClick={() => courseDelete(value._id)}>
                        <MdDeleteForever />
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tables;
