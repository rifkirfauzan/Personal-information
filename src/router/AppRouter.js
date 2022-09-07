import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddPersonal from '../components/AddPersonal';
import PersonalsList from '../components/PersonalsList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditPersonal from '../components/EditPersonal';
import PersonalsContext from '../context/PersonalsContext';

const AppRouter = () => {
  const [personals, setPersonals] = useLocalStorage('personals', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <PersonalsContext.Provider value={{ personals, setPersonals }}>
            <Switch>
              <Route component={PersonalsList} path="/" exact={true} />
              <Route component={AddPersonal} path="/add" />
              <Route component={EditPersonal} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </PersonalsContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
