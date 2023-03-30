import React, { useEffect } from 'react'
import { Button, Col, Form, FormControl, FormLabel, FormText, Image, Row } from 'react-bootstrap'
import { DashboardLayout } from '../../Components/Layouts/DashboardLayout'

export const Avatar = () => {
    
    useEffect(() => {
        document.title = 'Update Avatar | Book Store';
    }, [])

  return (
    <>
    <DashboardLayout>
        <Row>
            <Col sm="4" className="p-3">
                <div className="p-4 mt-3 mx-2 bg-light rounded">
                    <h4 className="text-uppercase border-start border-5 border-secondary ps-3">Update Display picture</h4>
                    <hr />
                    <div className="my-3 mx-auto border d-flex justify-content-center align-items-center" 
                         style={{width: 200+"px", height: 200+"px"}}>
                        <Image src="" alt="User" className="w-100" />
                    </div>
                    <Form action="" method="POST" enctype="multipart/form-data">
                        <div className="mb-3">
                            <FormLabel for="">Select Avatar</FormLabel>
                            <FormControl type="file" name="avatar" />
                            <FormText className="text-danger"></FormText>
                        </div>

                        <div className="d-grid mb-3">
                            <Button className="btn-secondary">Upload Profile</Button>
                        </div>
                    </Form>

                    <Form action="" method="POST">
                        <div className="d-grid">
                            <Button>Remove Profile</Button>
                        </div>
                    </Form>
                </div>
            </Col>
        </Row>
    </DashboardLayout>
    </>
  )
}
