import React from "react";
import { Card } from "react-bootstrap";
import "./Reviews.scss";
import { TiDeleteOutline } from "react-icons/ti";
import { BsStar } from "react-icons/bs";
const Reviews = ({ title, rating, comment, deleteReview }) => {
  return (
    <Card style={{ width: "18rem" }} bg="dark">
      <Card.Body>
        <Card.Title>
          {title} <TiDeleteOutline onClick={deleteReview} />
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {[...Array(rating)].map((star,index) => {
            return <BsStar key={index}/>;
          })}
        </Card.Subtitle>
        <Card.Text>{comment}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Reviews;
