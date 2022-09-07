import React, { useContext } from 'react';
import PersonalForm from './PersonalForm';
import PersonalsContext from '../context/PersonalsContext';

const AddBook = ({ history }) => {
  const { personals, setPersonals } = useContext(PersonalsContext);

  const handleOnSubmit = (personal) => {
    setBooks([personal, ...personals]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;
