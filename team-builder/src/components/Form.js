import React from 'react';

export default function Form(props){
  const {values, submit, update} = props;

  const onChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    update(name, value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Username: 
          <input 
            type="text"
            name="name"
            value={values.username}
            placeholder="Type in a username"
            maxLength="30"
            onChange={onChange}
          />
        </label>
        <label>Email: 
          <input 
            type="email"
            name="email"
            value={values.email}
            placeholder="Type in an email"
            maxLength="50"
            onChange={onChange}
          />
        </label>
        <label>Role: 
          <select 
            value={values.role} 
            name="role" 
            onChange={onChange}
          >
            <option value=''>-- Select a Role --</option>
            <option value='Front End Dev'>Front End Dev</option>
            <option value='Back End Dev'>Back End Dev</option>
            <option value='Full Stack Dev'>Full Stack Dev</option>
            <option value='Wizard Dev'>Wizard Dev</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}