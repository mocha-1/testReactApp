
import { Modal, Table } from 'react-bootstrap'
import React, { Fragment } from 'react'
import { useState } from 'react';
import UserForm from './userForm'
import './userList.css'



function UserList() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const { users } =  useContext(GlobalContext);
    // console.log(users) 

    const users = [
            {
                id: 1,
                firstname: 'one',
                lastname: 'One',
                email: 'one@gmail.com',
                mobile: '0123456789'
            },
            {
              id: 2,
              firstname: 'two',
              lastname: 'Two',
              email: 'two@gmail.com',
              mobile: '0123456789'
          },
        ];

    return (
    <>
      <div className = 'userList'>
          
    
          <Table responsive>
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th scope="col">email</th>
                <th scope="col">Mobile</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
            
                {users.map((user, i) => {
                  return (
                    <Fragment>
                    <tr key={i}>
                        <td>{user.id}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                        <td>{user.mobile}</td>
                        <td >
                        <button type="button" className="btn btn-secondary" onClick={ handleShow } >Edit</button>
                        &nbsp;
                        <button type="button" className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    </Fragment>
                  )
                })}

            </tbody>    
          </Table>

        <Modal show={show} onHide={handleClose} size="xl" >
          <Modal.Header closeButton>
            <Modal.Title>
                <h2>Edit Profile</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <UserForm/>
          </Modal.Body>
        </Modal>
      </div>
    </>
    );
  }

export default UserList;