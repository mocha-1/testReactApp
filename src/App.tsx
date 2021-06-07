
import './components/userForm.css';

import UserForm from './components/userForm';
import UserList from './components/userList';


import 'bootstrap/dist/css/bootstrap.min.css';

import { Form } from 'react-bootstrap'

function App() {

  return (
    <>

      <div className="UserHeader">
        <Form.Label>
            <h2>User Profile</h2>
        </Form.Label>
      </div>
      <br/><br/>
      <div className = 'userForm'>
          <UserForm/></div>
      <UserList/>

    </>
  );
}

export default App;
