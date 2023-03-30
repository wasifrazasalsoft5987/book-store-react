import React from 'react'
import { Button, Col, Form, FormControl, FormLabel, FormText, Row } from 'react-bootstrap'

export const AccountTab = () => {
  return (
    <>
        <h4 className="text-uppercase border-start border-5 border-secondary ps-3">Account settings</h4>
        <hr />
        <Form action="" method="post" className="my-3">
            
            <Row>
                <Col sm="6" className="mx-auto">
                    <div className="mb-3">
                        <FormLabel>Email</FormLabel>
                        <FormControl type="email" name="email" value="" />
                        <FormText className="text-danger"></FormText>
                        <FormText muted>please enter only valid email address, otherwise you will not be able to recover your account</FormText>
                    </div>

                    <div className="mb-3">
                        <FormLabel>Username</FormLabel>
                        <FormControl type="text" name="username" value="" />
                        <FormText className="text-danger"></FormText>
                        <FormText muted>after changing your username, your old one will become avaliable for anyone to claim</FormText>
                    </div>

                    <div className="d-grid">
                        <Button className="btn-secondary">Update my Account</Button>
                    </div>
                </Col>
            </Row>
        </Form>
    </>
  )
}
