import "./CourseDetail.scss";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Lectures from "./Lectures";
import {
  createCourseReview,
  deleteCourseReview,
  getAllLectures,
  getCourseDetails,
  getCourseReviews,
} from "../redux/actions/actions";
import Reviews from "./Reviews";
import { BsStar } from "react-icons/bs";
import { TailSpin } from "react-loader-spinner";

const CourseDetail = ({
  isAuthenticated,
  lectures,
  // reviews,
  loading,
  isDarkMode,
  courseInfo,
  user,
}) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const navigate=useNavigate()
  const addReview = async () => {
    await dispatch(createCourseReview(id, comment, rating));
    setComment("");
    setRating(0);
    await dispatch(getCourseReviews(id));
  };
  const deleteReview = async () => {
    await dispatch(deleteCourseReview(id));
    await dispatch(getCourseReviews(id));
  };
  const [comment, setComment] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Course detail";
    async function fetchData() {
      if (isAuthenticated) {
        await dispatch(getAllLectures(id));
        await dispatch(getCourseDetails(id));
        await dispatch(getCourseReviews(id));
      }
    }
    fetchData();
  }, [dispatch, id, isAuthenticated]);
  return (
    <>
      <div className={`courses ${isDarkMode ? "hero-colorMode" : ""}`}>
        {loading ? (
          <TailSpin
            height="50"
            width="50"
            color="white"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          courseInfo && (
            <>
              <section className={`hero ${isDarkMode ? "hero-colorMode" : ""}`}>
                <div>
                  <span>{courseInfo.title}</span>
                  <p>{courseInfo.description}</p>
                  {user.subscription.status === "active" ||
                  user.role === "admin" ? null : (
                    <div>
                      <button>
                        <span onClick={()=>navigate('/subscribe')}>Subscribe Now</span>
                      </button>
                    </div>
                  )}
                </div>
                <img
                  src={courseInfo.poster.url}
                  style={{
                    borderRadius: "5%",
                    backgroundColor: "transparent",
                    padding: "0rem",
                  }}
                  alt=""
                />
              </section>

              {user.subscription.status === "active" ||
              user.role === "admin" ? (
                <>
                  <Lectures
                    loading={loading}
                    lectures={courseInfo.lectures}
                    isDarkMode={isDarkMode}
                  />
                  <div
                    className={`reviews ${isDarkMode ? "hero-colorMode" : ""}`}
                  >
                    <div className="totalRating">
                      Rating {courseInfo.ratings}
                    </div>
                    <div className="addReview">
                      <textarea
                        value={comment}
                        cols="50"
                        rows="5"
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Leave your review..."
                      />
                      {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                          <>
                            <span
                              key={index}
                              className={
                                index <= (hover || rating) ? "on" : "off"
                              }
                              onClick={() => setRating(index)}
                              onMouseEnter={() => setHover(index)}
                              onMouseLeave={() => setHover(rating)}
                            >
                              <BsStar />
                            </span>
                          </>
                        );
                      })}
                      <button className="" onClick={addReview}>
                        Add Review
                      </button>
                    </div>
                  </div>
                  <h2>Reviews</h2>
                  <div className="reviewsList">
                    {courseInfo &&
                      courseInfo.reviews.map((rev, index) => {
                        return (
                          <Reviews
                            isAuthenticated={isAuthenticated}
                            key={index}
                            isDarkMode={isDarkMode}
                            title={rev.name}
                            rating={rev.rating}
                            comment={rev.comment}
                            deleteReview={deleteReview}
                          />
                        );
                      })}
                  </div>
                </>
              ) : null}
            </>
          )
        )}
      </div>
    </>
  );
};

export default CourseDetail;
