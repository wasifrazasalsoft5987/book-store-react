import React, { useEffect } from 'react'
import { Button, Col, Form, FormControl, FormLabel, FormText, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthLayout } from '../../Components/Layouts/AuthLayout'

export const ForgotPassword2 = () => {
        
    useEffect(() => {
        document.title = 'Verify Email | Book Store';
    }, [])

  return (
    <>
    <AuthLayout>
    <Row>
        <Col sm="4">
            <div className="p-4 mt-3 mx-2 bg-light rounded">
                <h4 className="text-uppercase border-start border-5 border-secondary ps-3">Found You!</h4>
                <p>4-digit code has been sent to your email address, <b>test@example.com</b></p>
                <hr />
                <Form action="" method="POST">
                    <FormControl type="hidden" name="email" value="" />

                    <div className="mb-3">
                        <FormLabel for="">Code</FormLabel>
                        <FormControl type="number" name="code" value="" />
                        <FormText className="text-danger"></FormText>
                    </div>

                    <div className="d-grid">
                        <Link className="btn btn-secondary" to={"/reset-password"}>Verify</Link>
                    </div>
                    
                </Form>
            </div>
        </Col>
    </Row>
    </AuthLayout>
    </>
  )
}
