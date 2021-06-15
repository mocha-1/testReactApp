
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import { createBrowserHistory } from "history";
import UserLisetPage from './pages/UserList'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import {
  Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

let history = createBrowserHistory();

function App() {
   
  const [userToken, setUserToken] = useState("")

  useEffect(() =>  {
      (async () => {
        await checkToken();
      })();
  }, [])


  const signout = async () => {
    console.log("signout")
    await setUserToken("");
  }

  const checkToken = () => {
    if(userToken === ""){
      history.push("/signin");
      return true
    }
    else return false
    
  }

  return (
    <>
    <Router history={history}>
        <Switch>
          <Route path="/signin" > 
            <Signin setToken={setUserToken} history={history}/> </Route>
          <Route path="/signup" > <Signup/> </Route>
          <Route exact path="/" > 
            {checkToken() ? <Redirect to="/signin" /> : <UserLisetPage token={userToken} signout={signout}  /> }
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
