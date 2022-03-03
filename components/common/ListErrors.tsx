import React from "react";

const ListErrors = ({ errors }) => (
  <ul className="error-messages" data-cy="error-messages-list">
    {Object.keys(errors).map((key) => {
      return (
        <li key={key}>
          {key} {errors[key]}
        </li>
      );
    })}
  </ul>
);

export default ListErrors;
