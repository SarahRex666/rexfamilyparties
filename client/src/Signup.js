import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Navigate, useNavigate } from "react-router-dom";

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    address: "",
    phone: "",
  });
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      withCredentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((r) => r.json())
      .then((newUser) => console.log(newUser))
      .then(navigate("/"));
  };
  return (
    <div class="container w-50 p-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mt-5">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            id="first_name"
            placeholder="First Name"
            value={formState.first_name}
            onChange={handleChange}
          />
          <br></br>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            id="last_name"
            placeholder="Last Name"
            value={formState.last_name}
            onChange={handleChange}
          />
          <br></br>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            id="address"
            placeholder="Address"
            value={formState.address}
            onChange={handleChange}
          />
          <br></br>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            id="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
          />
          <br></br>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            id="phone"
            placeholder="Phone"
            value={formState.phone}
            onChange={handleChange}
          />
          <br></br>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            id="username"
            placeholder="User Name"
            value={formState.username}
            onChange={handleChange}
          />
          <br></br>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            placeholder="Password"
            value={formState.password}
            onChange={handleChange}
          />
          <br></br>
        </Form.Group>
        <Button
          variant="outline-primary"
          type="submit"
          id="submit"
          value="Submit"
        >
          Submit
        </Button>
        <br></br>
        <br></br>
      </Form>
    </div>
  );
}

export default Signup;
