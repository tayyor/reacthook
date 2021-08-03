import React from "react";
import {Input} from 'reactstrap';


function Filter({ handleSearch }) {
  return (
    <div className="mt-3 py-3">
      <div className="col-md-8">
        <Input onChange={handleSearch} type="text" placeholder="search movie" />
      </div>
    </div>
  );
}

export default Filter;
