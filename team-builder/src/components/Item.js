
import React from 'react';

export default function Item(props){

  return (
    <div>
      <h3>{props.user.name}</h3>
      <p>Email: {props.user.email}</p>
      <p>Role: {props.user.role}</p>
    </div>
  );
}