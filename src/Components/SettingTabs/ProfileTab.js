import React from 'react'
import { Button, Col, Form, FormControl, FormLabel, FormSelect, FormText, Row } from 'react-bootstrap'

export const ProfileTab = () => {
  return (
    <>
        <h4 className="text-uppercase border-start border-5 border-secondary ps-3">Profile settings</h4>
        <hr />
        <Form action="" method="post" className="my-3">
            <Row>
                <Col sm="6" className="mx-auto">
                    <div className="mb-3">
                        <FormLabel>First Name</FormLabel>
                        <FormControl type="text" name="firstname" value="" />
                        <FormText className="text-danger"></FormText>
                    </div>
                    <div className="mb-3">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl type="text" name="lastname" value="" />
                        <FormText className="text-danger"></FormText>
                    </div>
                    <div className="mb-3">
                        <FormLabel for="">Country Code</FormLabel>
                        <FormSelect name="countrycode"> 
                            <option value="">-- Select --</option>
                            <option value="+92" selected>+92</option>
                        </FormSelect>
                    </div>
                    <div className="mb-3">
                        <FormLabel for="">Phone </FormLabel>
                        <FormControl type="number" name="phone" value="" />
                        <FormText className="text-danger"></FormText>
                    </div>
                    <div className="d-grid">
                        <Button className="btn-secondary">Update Profile</Button>
                    </div>
                </Col>
            </Row>
        </Form>
    </>
  )
}
