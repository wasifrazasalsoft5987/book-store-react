import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form, FormControl, FormLabel, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { AuthLayout } from '../../Components/Layouts/AuthLayout'

export const Login = () => {
    
    useEffect(() => {
        document.title = 'Login | Book Store';
    }, [])

  return (
    <>
    <AuthLayout>
        <Row>
            <div className='col-sm-4'>
                <div class="p-4 mt-3 mx-3 bg-light rounded">
                    <h4 className="text-uppercase border-start border-5 border-secondary ps-3">Login</h4>
                    <hr />
                    <Form>
                        <div className='form-group mb-3'>
                            <FormLabel>Username</FormLabel>
                            <FormControl type="text" name='username' id='username' />
                        </div>
                        <div className='form-group mb-3'>
                            <FormLabel>Password</FormLabel>
                            <FormControl type="password" name='password' id='password' />
                        </div>
                        <div class="d-flex justify-content-end mb-4">
                            <Link to={"/forgot-password"} className="text-dark text-decoration-none">Forget Password</Link>
                        </div>
                        <div className='d-grid'>
                            <Link className='btn btn-secondary' to={'/dashboard'}>Login</Link>
                        </div>
                    </Form>
                </div>
            </div>
        </Row>
    </AuthLayout>
    </>
  )
}
