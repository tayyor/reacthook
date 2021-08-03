import React from "react";
import { List } from "./Movies.js";
import { useParams } from "react-router-dom";

const Routing = () => {
  const { id } = useParams();
  const movieDetails = List.find((movie) => movie.id === +id);
  const videoUrl = movieDetails.url.split("=")[1];
  return (
    <div style={{ marginLeft: "500px", marginTop: "100px" }}>
      <h1>{movieDetails.title}</h1>
      <iframe
        title={movieDetails.title}
        src={`https://www.youtube.com/embed/${videoUrl}`}
        style={{
          width: "500px",
          height: "400px",
        }}
      ></iframe>
    </div>
  );
};

export default Routing;
