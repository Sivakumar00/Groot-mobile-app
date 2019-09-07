import React, { useEffect, useState } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './pages/Login';
import { AsyncStorage } from 'react-native';
import { AsyncConst } from './config/AsyncConstants';
import Main from './pages/Main';
import PlaceHolder from './pages/PlaceHolder';

const Routes = () => {
  const [reDirectToLogin, setRedirectToLogin] = useState(false);
  const [reDirectToMain, setRedirectToMain] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(AsyncConst.isLoggedIn).then(isLoggedIn => {
			if (isLoggedIn === null) {
        setRedirectToLogin(true);
        setRedirectToMain(false);
      } else {
        setRedirectToMain(true);
        setRedirectToLogin(false);
      }
    });
  }, []);

  return (
    <Router>
			<Scene key="root">
				<Scene key='placeholder' component={PlaceHolder}/>
         <Scene key="login" component={Login} title="Login" hideNavBar={true} initial={reDirectToLogin} />
        <Scene key="main" component={Main} title="Main" hideNavBar={true} initial={reDirectToMain} />
      </Scene>
    </Router>
  );
};

export default Routes;
