import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./Card.scss";
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
          <Card.Title>{title}</Card.Title>
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
