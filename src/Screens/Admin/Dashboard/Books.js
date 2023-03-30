import React from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AdminDashboardLayout } from '../../../Components/Layouts/AdminDashboardLayout'
import { HeaderInfo } from '../../../Components/CustomHeaderInfo'

export const Books = () => {
  return (
    <>
    <AdminDashboardLayout>
    <Row>
        <HeaderInfo sm="10" class="mx-auto" />
        <Col sm="10" className="mx-auto p-3">
            <Card>
                <div className="card-body">
                    <h4 className="text-uppercase border-start border-5 border-warning ps-3">Books</h4>
                    <hr />
                    <div className="d-flex justify-content-end align-items-center mb-3">
                        <Link to={"/admin/dashboard/book/add"} className="btn btn-warning px-5">Add Books</Link>
                    </div>
                    
                    <div className="table-responsive">
                        <Table className="table">
                            <thead className="table-dark">
                                <tr className="text-center">
                                    <th scope="col">ID</th>
                                    <th scope="col">Title</th>
                                    {/* <th scope="col">Description</th> */}
                                    <th scope="col">Category</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center">
                                    <td scope="row">01</td>
                                    <td scope="row">Intro to Programming</td>
                                    {/* <td scope="row">{{ $book->description }}</td> */}
                                    <td scope="row">Informative</td>
                                    <td scope="row">John Doe</td>
                                    <td scope="row">1500</td>
                                    <td>
                                        <Link className="btn btn-sm btn-secondary" 
                                              to={"/admin/dashboard/book/update/1"}>
                                            Update
                                        </Link>
                                        <Button className="btn-sm btn-danger ms-1">Delete</Button>
                                    </td>
                                </tr>    
                                {/* <tr className="text-center">
                                    <td className="text-muted" colspan="7">
                                        <h2>No Books to show!</h2>
                                    </td>                                    
                                </tr> */}
                            </tbody>
                        </Table>
                    </div>            
                </div>
            </Card>
        </Col>
    </Row>
    </AdminDashboardLayout>
    </>
  )
}
