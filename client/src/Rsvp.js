import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

function Rsvp(currentUser) {
  const [formState, setFormState] = useState({
    user_id: currentUser.currentUser.id,
    attending: false,
    dietary_restriction: "",
    kids: null,
    total_guests: null,
  });
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/rsvps`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((r) => r.json())
      .then((r) => console.log(r));
  }

  if (formState.attending === "true") {
    return (
      <div class="container w-25 p-5">
        <h1>RVSP</h1>
        <h5>Ok, so we need a couple things:</h5>
        <br></br>
        <br></br>
        <Form>
          <h5>Ok, first, are you coming to this thing?</h5>
          <Form.Select
            onChange={(e) => handleChange(e)}
            id="attending"
            class="secondary"
          >
            <option value={false}>Not this time, sorry</option>
            <option value={true}>Hell yeah!</option>
          </Form.Select>
          <br></br>
          <h5>Sick! Any dietary restrictions??</h5>
          <p>
            Even if you think we know your dietary needs, please add them here!
          </p>
          <Form.Control
            as="textarea"
            rows={3}
            id="dietary_restriction"
            onChange={handleChange}
          />
          <br></br>
          <h5>Bringing any kiddos?</h5>
          <Form.Select onChange={(e) => handleChange(e)} id="kids">
            <option value={false}>Nope!</option>
            <option value={true}>Yeah!</option>
          </Form.Select>
          <br></br>
          <h5>Ok, so how many people in total? Including yourself!</h5>
          <Form.Control
            onChange={(e) => handleChange(e)}
            type="number"
            id="total_guests"
          ></Form.Control>
          <Button
            type="submit"
            id="submit"
            value="submit"
            onClick={handleSubmit}
          >
            Submit!
          </Button>
        </Form>
      </div>
    );
  }
  return (
    <div class="container w-25 p-5">
      <h1>RVSP</h1>
      <h5>Ok, so we need a couple things:</h5>
      <br></br>
      <br></br>
      <Form>
        <h5>Ok, first, are you coming to this thing?</h5>
        <Form.Select
          onChange={(e) => handleChange(e)}
          id="attending"
          class="secondary"
        >
          <option value={false}>Not this time, sorry</option>
          <option value={true}>Hell yeah!</option>
        </Form.Select>
        <Button type="submit" id="submit" value="submit" onClick={handleSubmit}>
          Submit!
        </Button>
      </Form>
    </div>
  );
}

export default Rsvp;
