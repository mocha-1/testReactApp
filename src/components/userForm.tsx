
import { Form, Button, Col,Row } from 'react-bootstrap'
import './userForm.css'


function UserForm() {
    return (
      <>

        <Form>
        <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="1">
                Firstname
            </Form.Label>
        <Col sm="5">
            <Form.Control type="firstname" placeholder="Enter firstname.." />
        </Col>
        
            <Form.Label column sm="1" >
                Lastname
            </Form.Label>
        
        <Col sm="5">
            <Form.Control type="lastname" placeholder="Enter lastname.." />
        </Col>
        </Form.Group>
        </Form>

        <Form>
        <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="1">
                Email
            </Form.Label>
        <Col sm="5">
            <Form.Control type="email" placeholder="Enter email.." />
        </Col>
            <Form.Label column sm="1" >
                Mobile No.
            </Form.Label>
        
        <Col sm="5">
            <Form.Control type="mobile" placeholder="Enter mobile phone.." />
        </Col>
        </Form.Group>
        </Form>

        <Button className="float-right" variant="primary" type="submit" size="lg" > Submit </Button>


      </>
    );
  }

export default UserForm;