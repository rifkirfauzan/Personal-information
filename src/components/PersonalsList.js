import React, { useContext } from 'react';
import _ from 'lodash';
import Personal from './Personal';
import PersonalsContext from '../context/PersonalsContext';

const PersonalsList = () => {
  const { personals, setPersonals } = useContext(PersonalsContext);

  const handleRemovePersonal = (id) => {
    setPersonals(personals.filter((personal) => personal.id !== id));
  };

  return (
    <React.Fragment>
      <div className="personal-list">
        {!_.isEmpty(personals) ? (
          personals.map((personal) => (
            <Personal key={personal.id} {...personal} handleRemovePersonal={handleRemovePersonal} />
          ))
        ) : (
          <p className="message">No Personal available. Please add some personal.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default PersonalsList;
