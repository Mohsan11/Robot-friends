import React from "react";
const Searchbox = ({ searchfield, searchchange }) => {
  return (
    <div className="pa3">
      <input
        className="pa3 br b--light-green bg-light-blue"
        type="search"
        placeholder="Search Robot"
        onChange={searchchange}
      />
    </div>
  );
};
export default Searchbox;
