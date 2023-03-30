import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { HeaderInfo } from '../../../Components/CustomHeaderInfo'
import { AdminDashboardLayout } from '../../../Components/Layouts/AdminDashboardLayout'

export const AddBook = () => {
  return (
    <>
    <AdminDashboardLayout>
    <Row>
        <HeaderInfo sm="6" offset="3" />
        <Col sm="6" className="mx-auto p-3">
            <Card>
                <div className="card-body">
                    <h4 className="text-uppercase border-start border-5 border-secondary ps-3">Add a new book</h4>
                    <hr />
                    <Form action="" method="POST" className="px-5 py-3" enctype="multipart/form-data">
                        <div className="mb-3">
                            <Form.Label for="">Title</Form.Label>
                            <Form.Control type="text" name="title" value="" />
                            <Form.Text className="text-danger"></Form.Text>
                        </div>

                        <div className="mb-3">
                            <Form.Label for="">Description</Form.Label>
                            <Form.Control as="textarea" rows="4" style={{resize: 'none'}} name="description"></Form.Control>
                            <Form.Text className="text-danger"></Form.Text>
                        </div>

                        <div className="mb-3">
                            <Form.Label for="">Category</Form.Label>
                            <Form.Select name="categories[]" size="8" multiple>
                                <option value="" disabled>-- Category --</option>
                                <option value="">Informative</option>
                                <option value="">Horror</option>
                                <option value="">Classic</option>
                            </Form.Select>
                            <Form.Text className="text-danger"></Form.Text>
                        </div>

                        <div className="mb-3">
                            <Form.Label for="">Author</Form.Label>
                            <Form.Control type="text" name="author" value="" />
                            <Form.Text className="text-danger"></Form.Text>
                        </div>

                        <div className="mb-3">
                            <Form.Label for="">Price</Form.Label>
                            <Form.Control type="number" name="price" value="" />
                            <Form.Text className="text-danger"></Form.Text>
                        </div>
                        
                        {/* <div className="text-center">
                            <img src="" alt="book cover" className="img-thumbnail" width="200" />
                            <input type="hidden" name="cover_photo" value="" />
                        </div> */}

                        <div className="mb-3">
                            <Form.Label for="">Select Cover Photo</Form.Label>
                            <Form.Control type="file" name="cover" />
                            <Form.Text className="text-danger"></Form.Text>
                        </div>

                        <div className="d-grid">
                            <Button className="btn-secondary">Add Book</Button>
                        </div>
                    </Form>  
                </div>
            </Card>
        </Col>
    </Row>
    </AdminDashboardLayout>
    </>
  )
}
