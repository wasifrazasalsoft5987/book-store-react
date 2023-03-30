import React from 'react'
import { Col, Form, FormControl, FormLabel, FormText, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthLayout } from '../../../Components/Layouts/AuthLayout'

export const AdminLogin = () => {
  return (
    <>
    <AuthLayout>
    <Row>
        <Col sm="4" className="mx-auto">
            <div className="p-4 mt-5 mx-4 text-light bg-dark bg-opacity-75 rounded ">
                <h4 className="text-uppercase border-start border-5 border-warning ps-3">Welcome to Admin Portal</h4>
                <hr />
                <Form action="" method="POST">

                    <div className="mb-3">
                        <FormLabel for="">Username</FormLabel>
                        <FormControl type="text" className="rounded-0 shadow-none" name="username" value="" />
                        <FormText className="text-danger"></FormText>
                    </div>

                    <div className="mb-2">
                        <FormLabel for="">Password</FormLabel>
                        <FormControl type="password" className="rounded-0 shadow-none" name="password" id="" />
                        <FormText className="text-danger"></FormText>
                    </div>

                    <div className="d-flex justify-content-end mb-4">
                        <a href="" className="text-light text-decoration-none">Forget Password</a>
                    </div>

                    <div className="d-grid">
                        <Link className="btn btn-warning" to={"/admin/dashboard"}>Login</Link>
                    </div>
                    
                </Form>
            </div>
        </Col>
    </Row>
    </AuthLayout>
    </>
  )
}
