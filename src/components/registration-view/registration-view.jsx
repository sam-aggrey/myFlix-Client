import React, { useState } from "react";
import PropTypes from 'prop-types';
//import { Link } from "react-router-dom";

export function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://sammy-flix.herokuapp.com/users', {
      Username: username,
      Password: password,
      Email: email,
      Birthdate: birthdate
    })
      .then(response => {
        const data = response.data;
        console.log(data);
        window.open('/', '_self'); 
        alert("You have sucessfully registered.");
      })
      .catch(error => {
        if (error.response && error.response.status === 400) {
          alert('The value you entered is not valid.')
        }
      });
    console.log(username, password, email, birthdate);
  }; 

  return (
    <Form className="RegForm" onSubmit={handleSubmit} noValidate validated={validated}>
      <Form.Group controlId="formGroupUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" value={username} autoComplete="username" onChange={e => setUsername(e.target.value)} pattern='[a-zA-Z0-9]{5,}' minLength="5" required />
        <Form.Control.Feedback type="invalid">Please provide a valid username at least 5 characters long.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" value={password} autoComplete="password" onChange={e => setPassword(e.target.value)} minLength="5" required />
        <Form.Control.Feedback type="invalid">Please provide a valid password at least 5 characters long.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" value={email} autoComplete="email" onChange={e => setEmail(e.target.value)} required />
        <Form.Control.Feedback type="invalid">Please provide a valid email address.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formGroupBirthdate">
        <Form.Label>Birthdate</Form.Label>
        <Form.Control type="date" placeholder="00-00-0000" value={birthdate} onChange={e => setBirthdate(e.target.value)} required />
        <Form.Control.Feedback type='invalid'>Please enter a valid birthday.</Form.Control.Feedback>
      </Form.Group>
      <span>
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
        
          <Button variant="secondary" type="button">Back</Button>
 
      </span>
    </Form >
  )
}

RegistrationView.propTypes = {
  register: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthdate: PropTypes.string.isRequired
  }),
};
