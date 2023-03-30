import React from 'react'
import { Button, Col, Form, FormControl, FormLabel, FormText, Row } from 'react-bootstrap'

export const SecurityTab = () => {
  return (
    <>
        <h4 className="text-uppercase border-start border-5 border-secondary ps-3">Security settings</h4>
        <hr />
        <Form action="" method="post" className="my-3">
            <Row className="row">
                <Col sm="6" className="mx-auto">
                    <div className="mb-3">
                        <FormLabel>Current Password</FormLabel>
                        <FormControl type="password" name="current_password" />
                        <FormText className="text-danger"></FormText>
                    </div>

                    <div className="mb-3">
                        <FormLabel>New Password</FormLabel>
                        <FormControl type="password" name="new_password" />
                        <FormText className="text-danger"></FormText>
                    </div>

                    <div className="d-grid">
                        <Button className="btn-secondary">Change Password</Button>
                    </div>
                </Col>
            </Row>
        </Form>
    </>
  )
}
