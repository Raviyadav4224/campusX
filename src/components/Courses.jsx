import React, { useState } from "react";
import "./Courses.scss";
import { BsSearch } from "react-icons/bs";
import Cards from "./Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../redux/actions/actions";
import { TailSpin } from "react-loader-spinner";
const Courses = ({ toggleModal, isAuthenticated ,isDarkMode}) => {
  const [search, setSearch] = useState("");
  const { courses } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(getAllCourses(search));
    setSearch("");
  };
  useEffect(() => {
    document.title = "Courses";
    window.scrollTo(0, 0);
    dispatch(getAllCourses());
  }, [dispatch]);

  return (
    <>
      <div className={`courses ${isDarkMode?'hero-colorMode':''}`}>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <BsSearch onClick={handleSearch} />
        </div>
        <section className="courseLists">
          {!courses ? (
            <TailSpin
              height="200"
              width="200"
              color="#f1f169"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : courses.length === 0 ? (
            <h1>No Course found</h1>
          ) : (
            courses.map((e) => {
              return (
                <>
                  <Cards
                    toggleModal={toggleModal}
                    isAuthenticated={isAuthenticated}
                    id={e._id}
                    key={e._id}
                    img={e.poster.url}
                    title={e.title}
                    description={e.description}
                    createdBy={e.createdBy}
                    numOfLectures={e.numOfVideos}
                    views={e.views}
                    price={e.price}
                  />
                </>
              );
            })
          )}
        </section>
      </div>
    </>
  );
};

export default Courses;
