import "./CourseDetail.scss";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Lectures from "./Lectures";
import {
  createCourseReview,
  deleteCourseReview,
  getAllLectures,
  getCourseReviews,
} from "../redux/actions/actions";
import Reviews from "./Reviews";
const CourseDetail = ({
  isAuthenticated,
  lectures,
  reviews,
  loading,
  isDarkMode,
}) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const addReview = async () => {
    await dispatch(createCourseReview(id, comment, 5));
    setComment("");
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

    if (isAuthenticated) {
      dispatch(getAllLectures(id));
      dispatch(getCourseReviews(id));
    }
  }, [dispatch, id, isAuthenticated]);

  return (
    <>
      {isAuthenticated ? (
        <>
          <Lectures
            loading={loading}
            lectures={lectures}
            isDarkMode={isDarkMode}
          />
          <div className={`reviews ${isDarkMode ? "hero-colorMode" : ""}`}>
            <div className="addReview">
              <textarea
                value={comment}
                cols="50"
                rows="5"
                onChange={(e) => setComment(e.target.value)}
              />
              <button onClick={addReview}>Add Review</button>
            </div>
            <h2>Reviews</h2>
            <div className="reviewsList">
              {reviews &&
                reviews.map((rev, index) => {
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
          </div>
        </>
      ) : null}
    </>
  );
};

export default CourseDetail;
