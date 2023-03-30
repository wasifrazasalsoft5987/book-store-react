import React from 'react'
import { Button, Col, Form, FormCheck, FormLabel, FormSelect, Row } from 'react-bootstrap'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel'

export const NotificationTab = () => {
  return (
    <>
        <h4 className="text-uppercase border-start border-5 border-secondary ps-3">Notification settings</h4>
        <hr />
        <Form action="" method="post" className="my-3">
            <Row>
                <Col sm="6" className="mx-auto">
                    <div className="mb-3">
                        <FormLabel>Mute Specific Notification</FormLabel>
                        <FormSelect name="mute" id="specificNotifications">
                            <option value="">-- Select --</option>
                            <option value="1">New Book Notification</option>
                            <option value="2">Update Book Notification</option>
                        </FormSelect>
                    </div>

                    <FormCheck className="mb-3">
                        <FormCheckInput type="checkbox" 
                                        name="mute" 
                                        id="mute_all" 
                                        value="0" />
                        <FormCheckLabel for="mute_all">
                            Mute all Notification
                        </FormCheckLabel>
                    </FormCheck>

                    <div className="d-grid">
                        <Button className="btn-secondary">Save Settings</Button>
                    </div>
                </Col>
            </Row>
        </Form>
    </>
  )
}
