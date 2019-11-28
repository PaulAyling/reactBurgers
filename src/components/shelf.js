import React, { Fragment } from "react";

// styling

const Shelf = props => {
    return (
    <div>
      <div></div>
      <div className={"shelf "+{props.shelfStyle}}></div>
    </div>
  );
};

export default Shelf;
