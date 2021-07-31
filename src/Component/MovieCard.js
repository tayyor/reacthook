import React from "react";

import { Card, 
        CardTitle, 
        CardImg,
        CardBody,
        CardText } from "reactstrap";



const MovieCard = ({ movie: { title, posterUrl, description } }) => {
  return (
    <div className = 'col-3 mt-3'>
      <Card style= {{height:`500px`}}>
        <CardTitle>
          <div>
          <h4>{title}</h4>
          </div>
      </CardTitle>
        <CardImg
        witdth = '100%'
        style = {{height:`300px`}}
        src={posterUrl}  
        className = "img"
        />
        <CardBody>
          <div >
          <CardText >
            {description}
          </CardText>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default MovieCard;
