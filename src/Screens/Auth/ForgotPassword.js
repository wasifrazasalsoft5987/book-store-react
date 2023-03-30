import React, { useEffect } from 'react'
import { Button, Col, Form, FormControl, FormLabel, FormText, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthLayout } from '../../Components/Layouts/AuthLayout'

export const ForgotPassword = () => {
        
    useEffect(() => {
        document.title = 'Forgot Password | Book Store';
    }, [])

  return (
    <>
    <AuthLayout>
    <Row>
        <Col sm="4">
            <div className="p-4 mt-3 mx-2 bg-light rounded">
                <h4 className="text-uppercase border-start border-5 border-secondary ps-3">Let's find your account!</h4>
                <p>Enter your email address to recieve password reset code.</p>
                <hr />
                <Form action="" method="POST">
                    <div className="mb-3">
                        <FormLabel for="">Email</FormLabel>
                        <FormControl type="email" name="email" value="" />
                        <FormText className="text-danger"></FormText>
                    </div>

                    <div className="d-grid">
                        <Link className="btn btn-secondary" to={"/verify-code"}>Find my account</Link>
                    </div>
                    
                </Form>
            </div>
        </Col>
    </Row>
    </AuthLayout>
    </>
  )
}
