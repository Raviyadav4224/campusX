import React from "react";
import { Card } from "react-bootstrap";
import "./Reviews.scss";
import {TiDeleteOutline} from 'react-icons/ti'
const Reviews = ({  title,rating,comment,deleteReview}) => {
  return (
      <Card style={{ width: "18rem" }} bg="dark">
        <Card.Body>
          <Card.Title>{title} <TiDeleteOutline onClick={deleteReview}/></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {rating}
          </Card.Subtitle>
          <Card.Text>
            {comment}
          </Card.Text>
        </Card.Body>
      </Card>
  );
};

export default Reviews;
