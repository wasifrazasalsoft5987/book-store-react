import React, { useEffect } from 'react'
import { DashboardLayout } from '../../Components/Layouts/DashboardLayout';
import { ReadBookModal } from '../../Components/CustomModal/ReadBookModal';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Container, NavItem, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faUser,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

export const Dashboard = () => {

    useEffect(() => {
        document.title = 'Dashboard | Book Store';
    }, [])

  return (
    <>
    <DashboardLayout>
        <ReadBookModal />
        <Row>
            <Col sm="4" className="p-3">
                <div className="border d-flex justify-content-center align-items-center rounded-circle overflow-hidden" 
                style={{width: 200+"px", height: 200+"px"}}>
                    <Link to={"/avatar"}>
                        <Image src="" alt="User" className="w-100" />
                    </Link>
                </div>
                <br />
                <div>
                    <h3>Full Name <small className="text-muted">(@username)</small></h3>
                </div>
            </Col>
            <Col sm="8" className="p-3">
                <nav className="navbar navbar-expand-lg bg-light navbar-light mb-4">
                    <Container fluid>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav">
                                <NavItem>
                                    <Link className="nav-link" to="#">Adventure</Link>
                                </NavItem>      
                                <NavItem>
                                    <Link className="nav-link" to="#">Funny</Link>
                                </NavItem>      
                                <NavItem>
                                    <Link className="nav-link" to="#">Horror</Link>
                                </NavItem>      
                            </ul>
                        </div>
                    </Container>
                </nav>

                <Card className="mb-3">
                    <div className="card-body bg-light d-flex">
                        <div className="d-flex justify-content-center align-items-center w-25" style={{ height: 200+"px" }}>
                            <Image src="" alt="book cover" className="h-100" />
                        </div>
                        <div className="ms-3 w-75 d-flex flex-column">
                            <h4 className="m-0">Introduction to Programming</h4>
                            <div className="h6">
                                <span className="me-2">
                                    <FontAwesomeIcon icon={faTag} className="text-muted fa-sm" />
                                    <Link to="#" className="ms-1 text-decoration-none text-muted fw-normal">
                                        Informative
                                    </Link>
                                </span>
                                <span className="me-2">
                                    <FontAwesomeIcon icon={faUser} className="text-muted fa-sm" />
                                    <Link to="#" className="ms-1 text-decoration-none text-muted fw-normal">John Doe</Link>
                                </span>
                                <span className="me-2">
                                    <FontAwesomeIcon icon={faCalendar} className="text-muted fa-sm" />
                                    <Link to="#" className="ms-1 text-decoration-none text-muted fw-normal">27/09/2012</Link>
                                </span>
                            </div>
                            <div className="mt-3">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            <div className="d-flex justify-content-between mt-auto">
                                <h5 className="text-muted">Rs. 1500</h5>
                                <div>
                                    <Button className="btn-secondary btn-sm px-4">Buy Now</Button>
                                    <Button className="btn-secondary btn-sm px-4 ms-2" type="button" data-bs-toggle="modal" data-bs-target="#book-modal">
                                        Read More
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>      
                {/* <Card>
                    <div className="card-body">
                        <h1 className="text-muted text-center">No Book Found.</h1>
                    </div>
                </Card> */}
            </Col>
        </Row>
    </DashboardLayout>
    </>
  )
}
