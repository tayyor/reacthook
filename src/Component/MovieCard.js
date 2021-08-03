import React from "react";

import { Card, CardTitle, CardImg, CardBody, CardText } from "reactstrap";
import {Link} from 'react-router-dom';

const MovieCard = ({ movie: { title, posterUrl, description,id } }) => {

    const movieAddress= (url) =>{
      window.open(url,"target=_blank");
    }

  return (
    <div className="col-3 mt-3">
      <Link to = {`/routing/${id}`}>
      <Card style={{ height: `100%` }}>
        <CardTitle>
          <div>
            <h4>{title}</h4>
          </div>
        </CardTitle>
        <CardImg
          witdth="100%"
          style={{ height: `300px` }}
          src={posterUrl}
          className="img"
        />
        <CardBody>
          <div>
            <CardText>{description}</CardText>
          </div>
        </CardBody>
      </Card>
      </Link>
    </div>
  );
};

export default MovieCard;
