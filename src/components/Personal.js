import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Personal = ({
  id,
  name,
  dob,
  address,
  phone,
  password,
  handleRemovePersonal
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: '18rem' }} className="personal">
      <Card.Body>
        <Card.Title className="personal-title">{personalname}</Card.Title>
        <div className="personal-details">
          <div>Name: {name}</div>
          <div>DOb: {dob} </div>
          <div>Address: {address} </div>
          <div>Phone: {phone} </div>
          <div>Password: {password} </div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemovePersonal(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Personal;
