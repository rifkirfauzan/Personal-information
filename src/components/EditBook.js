import React, { useContext } from 'react';
import PersonalForm from './PersonalForm';
import { useParams } from 'react-router-dom';
import PersonalsContext from '../context/PersonalsContext';

const EditPersonal = ({ history }) => {
  const { personals, setPersonals } = useContext(PersonalsContext);
  const { id } = useParams();
  const personalToEdit = personals.find((personal) => personal.id === id);

  const handleOnSubmit = (personal) => {
    const filteredPersonal = personals.filter((personal) => personal.id !== id);
    setPersonals([personal, ...filteredPersonals]);
    history.push('/');
  };

  return (
    <div>
      <PersonalForm personal={personalToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditPersonal;
