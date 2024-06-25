import React from "react";

const AppHeader = ({ done, active }) => {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <h3>Todo List</h3>
      <h4>
        {active} more todo {done} done
      </h4>
    </div>
  );
};

export default AppHeader;
