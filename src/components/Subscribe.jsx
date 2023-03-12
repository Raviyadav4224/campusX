import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCourseDetails } from "../redux/actions/actions";
const Subscribe = ({loading, isDarkMode ,courseInfo}) => {
// console.log(courseInfo);
  return (
    <div className={`courses ${isDarkMode ? "hero-colorMode" : ""}`}>
      <section className={`hero ${isDarkMode ? "hero-colorMode" : ""}`}>
        {!loading ? (
          <>
            {/* <div>
              <span>{courseDetail.title}</span>
              <p>{courseDetail.description}</p>
              <div>
                <button>
                  <a href="#topCourses">Subscribe Now</a>
                </button>
              </div>
            </div>
            <img src={courseDetail.poster.url} alt="" /> */}
            null
          </>
        ) : null}
      </section>
    </div>
  );
};


export default Subscribe;


// {isAuthenticated? (
//   <>
//     {/* <Lectures
//       loading={loading}
//       lectures={lectures}
//       isDarkMode={isDarkMode}
//     /> */}
//     {/* <div>
//         <span>{courseInfo.courseDetail.title}</span>
//         <p>{courseInfo.courseDetail.description}</p>
//         <div>
//           <button>
//             <a href="#topCourses">Subscribe Now</a>
//           </button>
//         </div>
//       </div>
//       <img src={courseInfo.courseDetail.poster.url} alt="" /> */}
//     <div className={`reviews ${isDarkMode ? "hero-colorMode" : ""}`}>
//       <div className="totalRating">Ratings {rating}</div>
//       <div className="addReview">
//         <textarea
//           value={comment}
//           cols="50"
//           rows="5"
//           onChange={(e) => setComment(e.target.value)}
//           placeholder="Leave your review"
//         />
//         {[...Array(5)].map((star, index) => {
//           index += 1;
//           return (
//             <>
//               <span
//                 key={index}
//                 className={index <= (hover || rating) ? "on" : "off"}
//                 onClick={() => setRating(index)}
//                 onMouseEnter={() => setHover(index)}
//                 onMouseLeave={() => setHover(rating)}
//               >
//                 <BsStar />
//               </span>
//             </>
//           );
//         })}

//         <button className="" onClick={addReview}>
//           Add Review
//         </button>
//       </div>
//       <h2>Reviews</h2>
//       {/* <div className="reviewsList">
//         {reviews &&
//           reviews.map((rev, index) => {
//             return (
//               <Reviews
//                 isAuthenticated={isAuthenticated}
//                 key={index}
//                 isDarkMode={isDarkMode}
//                 title={rev.name}
//                 rating={rev.rating}
//                 comment={rev.comment}
//                 deleteReview={deleteReview}
//               />
//             );
//           })}
//       </div> */}
//     </div>
//   </>
// ) : (
//   <Subscribe isDarkMode loading courseInfo={courseInfo}/>
// )}