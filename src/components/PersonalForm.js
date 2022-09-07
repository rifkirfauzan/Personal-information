import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const BookForm = (props) => {
  const [personal, setBook] = useState(() => {
    return {
      name: props.personal ? props.personal.name : '',
      dob: props.personal ? props.personal.dob : '',
      address: props.personal ? props.personal.address : '',
      phone: props.personal ? props.personal.phone : '',
      phone: props.personal ? props.personal.phone : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { name, dob, address, phone,password,   } = personal;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [name, dob, address, phone, phone];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const personal = {
        id: uuidv4(),
        name,
        dob,
        address,
        phone,
        password,
        date: new Date()
      };
      props.handleOnSubmit(personal);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="name"
            value={name}
            placeholder="Enter name"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>email</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>address</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="address"
            value={address}
            placeholder="Enter address"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="dob">
          <Form.Label>Date FO Birth</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="dob"
            value={dob}
            placeholder="Enter dob quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="phone"
            value={phone}
            placeholder="Enter phone"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="input-control"
            type="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;
