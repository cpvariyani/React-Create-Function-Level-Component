import React from 'react';
import './Employee.css';

const Employee = props => {
  return (
    <div className="card">
      <p>
        <span className="heading"> Name : </span> <span>{props.Name}</span>{' '}
      </p>
      <p>
        <span className="heading"> Skills : </span> <span>{props.Skills}</span>
      </p>
    </div>
  );
};

export default Employee;
