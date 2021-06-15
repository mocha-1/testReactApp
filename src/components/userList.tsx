
import { Modal, Table, Button } from 'react-bootstrap'
import { useState, Fragment } from 'react'

import UserForm from './userForm'
import './userList.css'


interface User {
  _id: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
}
const defaultuser: User = {
  _id: "",
  firstName: "",
  lastName: "",
  mobile: "",
  email: ""
}

function UserList({users, onEdit, onDelete}: {
  users: User[];
  onEdit: (key: User) => void ;
  onDelete: (keyid: string) => void ;
  })
    {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [user, setUser] = useState<User>(defaultuser)

    const handleShow = (tempuser: User) => { 
      setShow(true);
      setUser(tempuser);
    }

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
            
                {users.map((user: User) => {
                  return (
                    <Fragment key={user._id}>
                    <tr >
                        <td></td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.mobile}</td>
                        <td >
                        <button type="button" className="btn btn-secondary" 
                        onClick={() => handleShow(user) } >Edit</button>
                        &nbsp;
                        <button type="button" className="btn btn-danger" 
                        onClick={() => onDelete(user._id) }>Delete</button>
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
              <UserForm users={user} onSubmit={onEdit}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
    );
  }

export default UserList;
