import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { HeaderInfo } from '../../../Components/CustomHeaderInfo'
import { AdminDashboardLayout } from '../../../Components/Layouts/AdminDashboardLayout'

export const UpdateBook = () => {
  return (
    <>
    <AdminDashboardLayout>
    <Row>
        <HeaderInfo sm="6" offset="3" />
        <Col sm="6" className="mx-auto p-3">
            <Card>
                <div className="card-body">
                    <h4 className="text-uppercase border-start border-5 border-secondary ps-3">update book</h4>
                    <hr />
                    <Form action="" method="POST" className="px-5 py-3" enctype="multipart/form-data">
                        <div className="mb-3">
                            <Form.Label for="">Title</Form.Label>
                            <Form.Control type="text" name="title" value="Intro to Programming" />
                            <Form.Text className="text-danger"></Form.Text>
                        </div>

                        <div className="mb-3">
                            <Form.Label for="">Description</Form.Label>
                            <Form.Control as="textarea" rows="4" style={{resize: 'none'}} name="description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Form.Control>
                            <Form.Text className="text-danger"></Form.Text>
                        </div>

                        <div className="mb-3">
                            <Form.Label for="">Category</Form.Label>
                            <Form.Select name="categories[]" size="8" multiple>
                                <option value="" disabled>-- Category --</option>
                                <option value="" selected>Informative</option>
                                <option value="">Horror</option>
                                <option value="">Classic</option>
                            </Form.Select>
                            <Form.Text className="text-danger"></Form.Text>
                        </div>

                        <div className="mb-3">
                            <Form.Label for="">Author</Form.Label>
                            <Form.Control type="text" name="author" value="John Doe" />
                            <Form.Text className="text-danger"></Form.Text>
                        </div>

                        <div className="mb-3">
                            <Form.Label for="">Price</Form.Label>
                            <Form.Control type="number" name="price" value="1500" />
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
                            <Button className="btn-secondary">Update Book</Button>
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
