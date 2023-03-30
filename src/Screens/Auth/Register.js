import React, { useEffect } from 'react'
import { Button, Col, Form, FormControl, FormLabel, FormSelect, Row } from 'react-bootstrap'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel'
import { Link } from 'react-router-dom'
import { AuthLayout } from '../../Components/Layouts/AuthLayout'

export const Register = () => {

    useEffect(() => {
        document.title = 'Register | Book Store';
    }, [])

  return (
    <>
    <AuthLayout>
    <Row>
        <div className="col-sm-6">
            <div className="p-4 mt-3 mx-3 bg-light rounded">
                <h4 className="text-uppercase border-start border-5 border-secondary ps-3">Let us know you!</h4>
                <small>Please fill out the following fields to get yourself registered.</small>
                <hr />
                <Form action="" method="POST">
                    <Row>
                        <Col sm="6" className="mb-3">
                            <FormLabel for="">First Name</FormLabel>
                            <FormControl type="text" name="firstname" />
                            <small className="form-text text-danger"></small>
                          </Col>
                          <Col sm="6" className="mb-3">
                            <FormLabel for="">Last Name</FormLabel>
                            <FormControl type="text" name="lastname" />
                            <small className="form-text text-danger"></small>
                          </Col>
                    </Row>
                    <div className="mb-3">
                        <FormLabel for="">Email</FormLabel>
                        <FormControl type="email" name="email" />
                        <small className="form-text text-danger"></small>
                    </div>
                    <Row>
                        <Col sm="3" className="mb-3">
                            <FormLabel for="">Country Code</FormLabel>
                            <FormSelect name="countrycode"> 
                                <option value="">-- Select --</option>
                                <option value="+92">+92</option>
                            </FormSelect>
                        </Col>
                        <Col sm="9" className="mb-3">
                            <FormLabel for="">Phone </FormLabel>
                            <FormControl type="number" name="phone" />
                            <small className="form-text text-danger"></small>
                        </Col>
                    </Row>
                    <div className="mb-3">
                        <FormLabel for="">Username</FormLabel>
                        <FormControl type="text" name="username" />
                        <small className="form-text text-danger"></small>
                    </div>
                    <div className="mb-3">
                        <FormLabel for="">Password</FormLabel>
                        <FormControl type="password" name="password" id="" />
                        <small className="form-text text-danger"></small>
                    </div>
                    <div className="mb-3">
                        <div>
                            <FormLabel for="">Gender</FormLabel>
                        </div>
                        <div className="form-check form-check-inline">
                            <FormCheckInput type="radio" name="gender" id="male" value="male" />
                            <FormCheckLabel for="male">Male</FormCheckLabel>
                        </div>
                        <div className="form-check form-check-inline">
                            <FormCheckInput type="radio" name="gender" id="female" value="female" />
                            <FormCheckLabel for="female">Female</FormCheckLabel>
                        </div><br/>
                        <small className="form-text text-danger"></small>
                    </div>
                    <div className="d-grid">
                        <Link className="btn btn-secondary" to={"/"}>Submit</Link>
                    </div>
                </Form>
            </div>
        </div>
    </Row>
    </AuthLayout>
    </>
  )
}
