import React from "react";
import { useState } from "react";
import { Container, Modal, Table } from "react-bootstrap";
import { TiDeleteOutline } from "react-icons/ti";
import "./Admin.scss";
import { useDispatch } from "react-redux";
import {
  createCourse,
  deleteCourse,
  getAllCourses,
} from "../redux/actions/actions";
import { TailSpin } from "react-loader-spinner";
const Admin = ({ isDarkMode, courses, loading }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow((prev) => !prev);
  };
  const handleCourseCreate = () => {
    setShow((prev) => !prev);
    setCreateOrRemove('create')
  };
  const handleCourseRemove = () => {
    setShow((prev) => !prev);
    setCreateOrRemove('remove')
  };
  const [title, SetTitle] = useState("");
  const [description, SetDescription] = useState("");
  const [createdBy, SetCreatedBy] = useState("");
  const [category, SetCategory] = useState("");
  const [file, SetFile] = useState("");
  const [courseId, setCourseId] = useState("");
  const handleCreateCourse = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("createdBy", createdBy);
    myForm.append("category", category);
    myForm.append("file", file);
    dispatch(createCourse(myForm));
  };
  const handleRemoveCourse = async (e) => {
    e.preventDefault();
    await dispatch(deleteCourse(courseId));
    dispatch(getAllCourses());
  };
  const [createOrRemove, setCreateOrRemove] = useState("remove");
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {createOrRemove === "create" ? (
            <>
              <form className="form" onSubmit={handleCreateCourse}>
                <input
                  type="text"
                  name="title"
                  placeholder="Course title"
                  onChange={(e) => {
                    SetTitle(e.target.value);
                  }}
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Course description"
                  onChange={(e) => SetDescription(e.target.value)}
                />
                <input
                  type="text"
                  name="category"
                  placeholder="Category eg. Coding, Web development, Data Science"
                  onChange={(e) => SetCategory(e.target.value)}
                />
                <input
                  type="text"
                  name="createdBy"
                  placeholder="Created by"
                  onChange={(e) => SetCreatedBy(e.target.value)}
                />
                <input
                  type="file"
                  name="coverPic"
                  placeholder="Cover"
                  onChange={(e) => SetFile(e.target.files[0])}
                />
                <button>
                {loading ? (
                  <TailSpin
                    height="25"
                    width="25"
                    color="white"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                ) : (
                  "Create"
                )}
                </button>
              </form>
            </>
          ) : (
            <form className="form" onSubmit={handleRemoveCourse}>
              <input
                type="text"
                name="courseId"
                placeholder="Course Id"
                onChange={(e) => {
                  setCourseId(e.target.value);
                }}
              />
              <button>
                {loading ? (
                  <TailSpin
                    height="25"
                    width="25"
                    color="white"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                ) : (
                  "Remove"
                )}
              </button>
            </form>
          )}
        </Modal.Body>
      </Modal>
      <div
        className={`actionOnCourses ${
          isDarkMode ? "topCourses-colorMode" : ""
        }`}
      >
        <div className="btnCreateOrRemoveCourse">
          <button onClick={handleCourseCreate}>Create a Course</button>
          <button onClick={handleCourseRemove}>Remove a Course</button>
        </div>
        <div className="listOfActiveCourses">
          <h1>Active Courses</h1>
          <Container>
            <Table striped responsive bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Created By</th>
                  <th>No Of Views</th>
                  <th>Price</th>
                  <th>Course Id</th>
                  <th>Remove</th>
                </tr>
              </thead>

              {courses.map((e, index) => {
                return (
                  <tbody key={index}>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{e.title}</td>
                      <td>{e.category}</td>
                      <td>{e.createdBy}</td>
                      <td>{e.views}</td>
                      <td>{e._id}</td>
                      <td>
                        <TiDeleteOutline />
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </Table>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Admin;
