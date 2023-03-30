import React from 'react'
import { Card, Col, Row, Table } from 'react-bootstrap'
import { AdminDashboardLayout } from '../../../Components/Layouts/AdminDashboardLayout'
import { HeaderInfo } from '../../../Components/CustomHeaderInfo'

export const Users = () => {
  return (
    <>
    <AdminDashboardLayout>
    <Row>
        <HeaderInfo sm="10" class="mx-auto" />
        <Col sm="10" className="mx-auto p-3">
            <Card>
                <div className="card-body">
                    <h4 className="text-uppercase border-start border-5 border-warning ps-3">Users</h4>
                    <hr />
                    
                    <div className="table-responsive">
                        <Table className="table">
                            <thead className="table-dark">
                                <tr className="text-center">
                                  <th scope="col">First Name</th>
                                  <th scope="col">Last Name</th>
                                  <th scope="col">Email</th>
                                  <th scope="col">Verified</th>
                                  <th scope="col">Phone</th>
                                  <th scope="col">Username</th>
                                  <th scope="col">Role</th>
                                  <th scope="col">Gender</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center">
                                    <td scope="row">John</td>
                                    <td scope="row">Doe</td>
                                    <td scope="row">john@example.com</td>
                                    <td scope="row">Yes</td>
                                    <td scope="row">+1 356 21559652</td>
                                    <td scope="row">john.doe</td>
                                    <td scope="row">admin</td>
                                    <td scope="row">male</td>
                                </tr>    
                                {/* <tr className="text-center">
                                    <td className="text-muted" colspan="7">
                                        <h2>No User to show!</h2>
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
