import React from "react";
import "./Home.scss";
import { TailSpin } from "react-loader-spinner";
import Hero from "../assets/sapiens.png";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCourses, getCourseReviews } from "../redux/actions/actions";
import Reviews from "./Reviews";
const Home = ({
  reviews,
  courses,
  toggleModal,
  isAuthenticated,
  isDarkMode,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "CampusX";
    dispatch(getAllCourses());
    dispatch(getCourseReviews("637e68e6e92d22895dea5542"));
  }, [dispatch]);
  return (
    <>
      <section className={`hero ${isDarkMode ? "hero-colorMode" : ""}`}>
        <div>
          <span>CampusX</span>
          <p>
            Hi, my name is Nitish. I am an educational content creator on
            YouTube with 50K+ Subscribers in the domain of Data Science. I have
            taught more than 50,000 students offline.
          </p>
          <div>
            <button>
              <a href="#topCourses">Explore Now</a>{" "}
            </button>
            <button>Join Now</button>
          </div>
        </div>
        <img src={Hero} alt="" />
      </section>

      <div className={`topCourses ${isDarkMode ? "topCourses-colorMode" : ""}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#5000ca"
            fillOpacity="1"
            d="M0,192L24,208C48,224,96,256,144,240C192,224,240,160,288,160C336,160,384,224,432,240C480,256,528,224,576,208C624,192,672,192,720,208C768,224,816,256,864,250.7C912,245,960,203,1008,202.7C1056,203,1104,245,1152,250.7C1200,256,1248,224,1296,202.7C1344,181,1392,171,1416,165.3L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          ></path>
        </svg>
        <h1 id="topCourses">Top Courses</h1>
        <div>
          {!courses ? (
            <TailSpin
              height="200"
              width="200"
              color="#5000ca"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            courses.slice(0, 3).map((e) => {
              return (
                <Card
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
              );
            })
          )}
        </div>
      </div>
      <div className={`youtube ${isDarkMode ? "hero-colorMode" : ""}`}>
        <iframe
          src="https://www.youtube.com/embed/BfzoFMSzb3o"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={`topReviews ${isDarkMode ? "topCourses-colorMode" : ""}`}>
      <h1 id="topCourses">Top Reviews</h1>
      <div>
        {!reviews ? (
          <TailSpin
            height="200"
            width="200"
            color="#5000ca"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          
          reviews.slice(0, 6).map((e,index) => {
            return (
              <Reviews
              key={index}
              isDarkMode={isDarkMode}
              title={e.name}
              rating={e.rating}
              comment={e.comment}
            />
            );
          })
        )}
      </div>
        
      </div>
    </>
  );
};

export default Home;
