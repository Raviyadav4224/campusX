import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./Card.scss";
import { FaStarHalfAlt } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
const Cards = ({
  toggleModal,
  isAuthenticated,
  id,
  price,
  img,
  title,
  description,
  createdBy,
  views,
  ratings,
}) => {
  const navigate = useNavigate();

  const goToCourseDetails = () => {};

  const addToPlaylist = () => {};

  const handleCourseDetails = () => {
    if (!isAuthenticated) {
      toggleModal();
    } else {
      navigate(`/courseDetail/${id}`);
    }
  };
  return (
    <>
      <Card style={{ width: "16rem" }} bg="dark" onClick={handleCourseDetails}>
        <Card.Img sizes="sm" variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            {title}
            {ratings % 1 ==0? <FiStar /> : <FaStarHalfAlt />}
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>₹ {price}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <small className="text-muted">{createdBy} </small>
          <small className="text-muted">Views : {views} </small>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Cards;
