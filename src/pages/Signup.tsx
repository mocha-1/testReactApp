import './Signin-up.css';
import { Form, Button, Col, Row } from 'react-bootstrap'
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  password: string;
  confirmpassword: string;
}

const Signup = () => {

  const { 
    register, 
    handleSubmit,
    formState: { errors }
    } = useForm<User>();

    const onSubmit = async (data: User) => {
      console.log(data);
    }

  return (
      <>

        <header className="signinHeader">
          <div className="signup-card">
            <div className="form-label">
              <div className="signin-label">
              <h2> Sing Up </h2>
              </div>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-signup-container">
                <Row>
                  <Col > 
                    <h5 style={{fontSize: 17}}>First name</h5>
                  </Col>
                  &nbsp;&nbsp;
                  <Col > 
                    <h5 style={{fontSize: 17}}>Last name</h5>
                  </Col>
                </Row>
                <Form.Group as={Row} controlId="formPlaintextfirst-last">
                  <Col >
                      <Form.Control 
                      {...register("firstName", { required: true })}
                      type="firstName" placeholder="Enter firstname.." />
                  </Col>
                  &nbsp;&nbsp;
                  <Col >
                      <Form.Control 
                      {...register("lastName", { required: true })}
                      type="lastName" placeholder="Enter lastname.." />
                  </Col>
                </Form.Group>
                <Row>
                  <Col > 
                    <h5 style={{fontSize: 17}}>Email</h5>
                  </Col>
                  &nbsp;&nbsp;
                  <Col > 
                    <h5 style={{fontSize: 17}}>Phone Number</h5>
                  </Col>
                </Row>
                <Form.Group as={Row} controlId="formPlaintextemail-phone">
                  <Col >
                      <Form.Control 
                      {...register("email", { required: true })}
                      type="email" placeholder="Enter email.." />
                  </Col>
                  &nbsp;&nbsp;
                  <Col >
                      <Form.Control 
                      {...register("mobile", { required: true })}
                      type="mobile" placeholder="Enter phone number.." />
                  </Col>
                </Form.Group>
                <br/>
                <Form.Group controlId="formBasicPassword">
                  <h5 style={{fontSize: 17}}>Password</h5>
                  <Form.Control 
                  {...register("password", { required: true })}
                  type="password" placeholder="Enter password" />
                </Form.Group>

                <Form.Group controlId="formBasicConfirmPassword">
                  <h5 style={{fontSize: 17}}>Confirm Password</h5>
                <Form.Control 
                {...register("confirmpassword", { required: true })}
                type="confirmpassword" placeholder="Enter confirm password" />
                </Form.Group>
                <br/>

                <Button variant="primary" size="sm" block>
                  <h5>Sing Up</h5>
                </Button>
                  <div style={{marginTop: 5, textAlign: "center"}}> 
                  Have an account? &nbsp;
                  <Link to = "/signin">Sing in now</Link>
                  </div>
                </div>
              </Form>
              
              
            </div>
          </div>

        </header>
      </>
  );
}

export default Signup;
