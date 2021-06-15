import './Signin-up.css';
import { Form, Button, Modal } from 'react-bootstrap'
import { useState } from 'react';
import { BrowserRouter as Router, Link, } from "react-router-dom";

import { useForm } from "react-hook-form";
import axios from 'axios'

interface Login {
  email: string;
  password: string;
}

const initialerrorlog = {
  statusCode: "401 Invalid login",
  message: " Unauthorized ",

}

const Signin = ({setToken , history }:
  {
    setToken: (keyid: string) => void ;
    history: any;
  }) => {
  
    const { 
    register, 
    handleSubmit,
    formState: { errors }
    } = useForm<Login>();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   // let history = useHistory();
    
    const onSubmit = async (data: Login) => {
      console.log(data);

      try {
        const res =  await axios.post("http://localhost:8080/auth/login", data);
        console.log(res.data.access_token)
        setToken(res.data.access_token)
        history.push('/');
      } catch(error) {
        handleShow();
        console.error(error)
      }
    }

  return (
      <>

        <header className="signinHeader">

          <div className="signin-card">
            <div className="form-label-margin">
              <div className="signin-label">
                <h2> Sign In </h2>
              </div>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formBasicEmail">
                  <h5 style={{fontSize: 17}}>Email address</h5>
                <Form.Control 
                  {...register("email", { required: true })}
                  type="email" placeholder="Enter email" />
                  {errors.email && <p>email is required</p>}
                </Form.Group>
                <br/>
                <Form.Group controlId="formBasicPassword">
                  <h5 style={{fontSize: 17}}>Password</h5>
                <Form.Control 
                  {...register("password", { required: true })}
                  type="password" 
                  placeholder="Enter password" />
                  {errors.password && <p>password is required</p>}
                </Form.Group>
                <br/>
                <Button 
                type="submit" variant="primary" size="sm" block>
                  <h5>Sign In</h5>
                </Button>
              </Form>
              <br/>
              <div style={{textAlign: "center"}}>
                <p />Don't have an account? &nbsp;
                <Link to = "/signup">Sign up now</Link>
              </div>
            </div>
          </div>
        </header>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{initialerrorlog.statusCode}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{initialerrorlog.message}</Modal.Body>
      </Modal>
      </>
  );
}

export default Signin;
