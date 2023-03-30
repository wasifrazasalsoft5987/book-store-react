import React from 'react'
import { Header } from '../Header'
import { Link } from 'react-router-dom';
import { Container, Navbar, NavItem } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faSignOut,
  faComment,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

export const AdminDashboardLayout = (props) => {
  return (
    <>
    <Header>
        <NavItem>
            <Link to={"/admin/dashboard"} className='nav-link'>
                <FontAwesomeIcon icon={faHome} className="fa-lg" />
            </Link>
        </NavItem>
        <NavItem>
            <Link to='#' className='nav-link'>
                <FontAwesomeIcon icon={faComment} className="fa-lg" />
            </Link>
        </NavItem>
        <NavItem>
            <Link to='#' className='nav-link'>
                <FontAwesomeIcon icon={faBell} className="fa-lg" />
            </Link>
        </NavItem>
        <NavItem className="dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Admin
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item" to="#">Settings</Link></li>
                <li><Link className="dropdown-item" to="#">Help</Link></li>
                <li><Link className="dropdown-item" to={"/"}>Logout</Link></li>
            </ul>
        </NavItem>
    </Header>

    <Navbar className="bg-light" expand="lg">
        <Container fluid>
            <NavbarCollapse className="justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <NavItem>
                        <Link className="btn btn-sm btn-secondary rounded px-4 mx-2" to={"/admin/dashboard/book"}>
                            Books
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className="btn btn-sm btn-secondary rounded px-4 mx-2" to={"/admin/dashboard/category"}>
                            Categories
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className="btn btn-sm btn-secondary rounded px-4 mx-2" to={"/admin/dashboard/user"}>
                            Users
                        </Link>
                    </NavItem>
                </ul>
            </NavbarCollapse>
        </Container>
    </Navbar>
    
    <div className='mt-5'>
      <Container>{ props.children }</Container>
    </div>
    </>
  )
}
