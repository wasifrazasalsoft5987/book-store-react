import React, { useEffect } from 'react'
import { Button, Col, Form, FormControl, FormLabel, FormText, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthLayout } from '../../Components/Layouts/AuthLayout'

export const ForgotPassword3 = () => {
        
    useEffect(() => {
        document.title = 'Reset Password | Book Store';
    }, [])

  return (
    <>
    <AuthLayout>
    <Row>
        <Col sm="4">
            <div className="p-4 mt-3 mx-3 bg-light rounded">
                <h4 className="text-uppercase border-start border-5 border-secondary ps-3">Reset Your Password!</h4>
                <p>Enter your email address to recieve password reset code.</p>
                <hr />
                <Form action="" method="POST">
                    <FormControl type="hidden" name="token" value="" />
                    
                    <div className="mb-3">
                        <FormLabel for="">Email</FormLabel>
                        <FormControl type="email" name="email" value="" />
                        <FormText className="text-danger"></FormText>
                    </div>

                    <div className="mb-3">
                        <FormLabel for="">Password</FormLabel>
                        <FormControl type="password" name="password" value="" />
                        <FormText className="text-danger"></FormText>
                    </div>
                    
                    <div className="mb-3">
                        <FormLabel for="">Confirm Password</FormLabel>
                        <FormControl type="password" name="password_confirmation" value="" />
                        <FormText className="text-danger"></FormText>
                    </div>

                    <div className="d-grid">
                        <Link className="btn btn-secondary" to={"/"}>Reset Password</Link>
                    </div>
                    
                </Form>
            </div>
        </Col>
    </Row>
    </AuthLayout>
    </>
  )
}
