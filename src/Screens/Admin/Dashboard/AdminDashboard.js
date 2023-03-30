import React from 'react'
import { Card, Col, Image, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AdminDashboardLayout } from '../../../Components/Layouts/AdminDashboardLayout'

export const AdminDashboard = () => {
  return (
    <>
    <AdminDashboardLayout>
    <Row>
        <Col sm="4" className="p-3">
            <div className="border d-flex justify-content-center align-items-center rounded-circle overflow-hidden" 
            style={{width: 200+"px", height: 200+"px"}}>
                <Link to={""}>
                    <Image src="" alt="User" className="w-100" />
                </Link>
            </div>
            <br />
            <div>
                <h3>Full Name <small className="text-muted">(@username)</small></h3>
            </div>
        </Col>
        <Col sm="8" className="p-3">
            <Card>
                <div className="card-body">
                    <h3 className="text-uppercase border-start border-5 border-warning ps-3">overview</h3>
                    <hr />
                    <div className="table-responsive">
                        <Table className="table">
                            <tbody>
                                <tr>
                                    <td colspan="1">Total No. of Users:</td>
                                    <td colspan="3">89</td>
                                </tr>
                                <tr>
                                    <td colspan="1">Total No. of Verified Users:</td>
                                    <td colspan="3">56</td>
                                </tr>
                                <tr>
                                    <td colspan="1">Total No. of Books:</td>
                                    <td colspan="3">746</td>
                                </tr>
                                <tr>
                                    <td colspan="1">Total No. of Categories:</td>
                                    <td colspan="3">78</td>
                                </tr>
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
