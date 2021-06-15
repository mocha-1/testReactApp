import { useState, useEffect } from 'react';
import { SubmitHandler } from "react-hook-form";
import '../components/userForm.css';
import UserForm from '../components/userForm';
import UserList from '../components/userList';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { Form, Navbar, Button, Nav } from 'react-bootstrap'


interface User {
  _id: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
}

function UserListPage({ token , signout }:
  {
    token: string;
    signout: () => void ;
    
  }) 
  {
    const [users, setUsers] = useState<User[]>([]);
    const TokenAuth = {
      headers: { Authorization: `Bearer ${token}` }
    };
    
    useEffect(() =>  {
        (async () => {
          console.log("count 20 sec")
          await getUserList();
          let timer1 = setTimeout(() => signout(), 50000);
        
          return () => {
            clearTimeout(timer1);
          };
        })();
    }, [])


    
    const getUserList = async () => {

      console.log(token)
      console.log(TokenAuth)
      try {
        const res = await axios.get("http://localhost:8080/user", TokenAuth);
        setUsers(res.data);
      } catch(error) {
        console.error(error);
      } 
    }
    const handleEditUser: SubmitHandler<User> = async (data: User) => {
      console.log(data);
      const newdata = {
        id: data._id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        mobile: data.mobile
      }
      console.log(newdata);
      try {
        const res = await axios.patch("http://localhost:8080/user" , newdata , TokenAuth )
        getUserList();
        console.log(res.data)
        console.log(users)
      } catch(error) {
        console.error(error);
      } 

    };

    const handleDeleteUser = async (id: string) => {

      try {
        const res = await axios.delete(`http://localhost:8080/user/${id}`, TokenAuth)
        setUsers(users.filter((user: User) => user._id !== id))
      } catch(error) {
        console.error(error);
      } 

    };

    const handleAddUser: SubmitHandler<User> = async (data: User) => {
      
        const newdata = {
            _id: "",
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            mobile: data.mobile
        }
        try {
          const res = await axios.post("http://localhost:8080/user" , newdata , TokenAuth )
          setUsers([...users,res.data])
          console.log(res.data)
          console.log(users)
        } catch(error) {
          console.error(error);
        } 

      };


  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Nav className="container-fluid">
        
          <Nav.Item className="ml-auto">
              <Button variant="outline-light" onClick={signout} >LogOut</Button>
          </Nav.Item>
        </Nav>
      </Navbar>

      <div className="UserHeader">
        <Form.Label>
            <h2>User Profile</h2>
        </Form.Label>
      </div>
      <br/><br/>

        <div className = 'userForm'>
            <UserForm onSubmit={handleAddUser}/>
        </div>
            <UserList users={users} onEdit={handleEditUser} onDelete={handleDeleteUser}/>

    </>
  );
}

export default UserListPage;
