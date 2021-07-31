import React from "react";
import {Input} from 'reactstrap';


function Filter({ handleSearch }) {
  return (
    <div className="mt-5">
      <div className="col-md-8">
        <Input onChange={handleSearch} type="text" placeholder="search movie" />
      </div>
    </div>
  );
}

export default Filter;
