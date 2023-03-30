import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { HeaderInfo } from '../../../Components/CustomHeaderInfo'
import { AdminDashboardLayout } from '../../../Components/Layouts/AdminDashboardLayout'

export const AddCategory = () => {
  return (
    <>
    <AdminDashboardLayout>
    <Row>
        <HeaderInfo sm="6" offset="3" />
        <Col sm="6" className="mx-auto p-3">
            <Card>
                <div className="card-body">
                    <h4 className="text-uppercase border-start border-5 border-secondary ps-3">Add category</h4>
                    <hr />
                    <Form action="" method="POST" className="px-5 py-3">
                        <div className="mb-3">
                            <Form.Label for="">Category Name</Form.Label>
                            <Form.Control type="text" name="category_name" value="" />
                            <Form.Text className="text-danger"></Form.Text>
                        </div>

                        <div className="d-grid">
                            <Button className="btn-secondary">Add Category</Button>
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
