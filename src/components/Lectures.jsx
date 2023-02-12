import React, { useState } from "react";
import "./CourseDetail.scss";
import { TailSpin } from "react-loader-spinner";

const Lectures = ({ loading, lectures ,isDarkMode }) => {
  const [index, setIndex] = useState(0);
  const changeVideo = (index) => {
    setIndex(index);
  };
  return (
    <>
      {!loading ? (
        <div className={`lectures ${isDarkMode?'hero-colorMode':''}`}>
          {lectures === undefined || lectures.length === 0 ? (
            // <h1>Please buy our subscription at just 799 per month</h1>
            <h1>No Lectures Available</h1>
          ) : (
            <>
              <div className="video" key={index}>
                <video src={lectures[index].video.url} controls></video>
                <h1>{lectures[index].title}</h1>
                <p>{lectures[index].description}</p>
              </div>
              <div className="videoLists">
                {lectures &&
                  lectures.map((e, index) => {
                    return (
                      <button key={index} onClick={() => changeVideo(index)}>
                        Lecture {index + 1}
                      </button>
                    );
                  })}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="lectures">
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
        </div>
        
      )}
    </>
  );
};

export default Lectures;
