import React from "react";

import { Card, CardTitle, CardImg, CardBody, CardText } from "reactstrap";
const MovieCard = ({ movie: { title, posterUrl, description } }) => {
  return (
    <div className = "col-4 mt-2">
      <Card style={{height: `500px`,width:`350px`}}>
        <CardTitle>
          <div className="row justify-content-center mt-2">
          <h4>{title}</h4>
          </div>
      </CardTitle>
        <CardImg
        style = {{height: `300px`,width: `250px`}}
        src={posterUrl}  
        className = "justify-content-center"
        />
        <CardBody>
          <div className = "row">
          <CardText style = {{width:`300px`}}>
            {description}
          </CardText>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default MovieCard;
