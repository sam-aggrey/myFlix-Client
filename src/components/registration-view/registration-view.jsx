import React, { useState } from "react";
import PropTypes from 'prop-types';

export function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);
  };

  return (
    <form>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Create Password:
        <input
          type="password" placeholder="your email password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>
          Email:
          <input
            type="email" placeholder="your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </label>
        <label>
          Birthday:
          <input
            type="date" 
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </label>
      </label>
      <button type="submit" onClick={handleSubmit}>Submit</button>
        <button onClick={() => { onBackClick(null); }}>Back</button>
       
    </form>
  );
}

RegistrationView.propTypes = {
  register: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthdate: PropTypes.string.isRequired
  }),
};

