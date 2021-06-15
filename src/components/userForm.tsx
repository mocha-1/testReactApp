

import { Form, Button, Col, Row } from 'react-bootstrap'
import { useForm } from "react-hook-form";

import './userForm.css'


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

function UserForm({users = defaultuser , onSubmit }: {
    users?: User;
    onSubmit: (key: User) => void ;
    }) {

    const { 
        register, 
        handleSubmit,
        formState: { errors }
    } = useForm<User>({
        defaultValues: users
      });

    

    return (
      <>
      <Form data-testid="form-element"  onSubmit={handleSubmit(User => onSubmit(User))} >
        <Form.Group as={Row} >
            <Form.Label column sm="1">
                Firstname
            </Form.Label>
            <Col >
                <Form.Control {...register("firstName", { required: true })}
                type="firstName" placeholder="Enter firstname.." 
                defaultValue={ users.firstName }/>
                {errors.firstName && <p>firstname is required</p>}
            </Col>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Form.Label column sm="1" >
                Lastname
            </Form.Label>
            <Col >
                <Form.Control {...register("lastName", { required: true })}
                type="lastName" placeholder="Enter lastname.." 
                defaultValue={ users.lastName }/>
                {errors.lastName && <p>lastname is required</p>}
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="1">
                Email
            </Form.Label>
            <Col >
                <Form.Control {...register("email", { required: true })}
                type="email" placeholder="Enter email.." 
                defaultValue={ users.email }/>
                {errors.email && <p>email is required</p>}
            </Col>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Form.Label column sm="1" >
                Mobile No.
            </Form.Label>
            <Col >
                <Form.Control {...register("mobile", { required: true })}
                type="mobile" placeholder="Enter mobile phone.." 
                defaultValue={ users.mobile }/>
                {errors.mobile && <p>mobile no. is required</p>}
            </Col>
        </Form.Group>
        

        <Button className="float-right" variant="primary" type="submit"
                size="lg" > Submit   
        </Button>

      </Form>
      </>
    );
  }

export default UserForm;