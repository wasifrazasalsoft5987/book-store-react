import React from 'react'
import { Header } from '../Header'
import { Link } from 'react-router-dom';
import { Container, NavItem } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faSignOut,
  faComment,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

export const DashboardLayout = (props) => {
  return (
    <>
    <Header>
        <NavItem>
            <Link to={"/dashboard"} className='nav-link'>
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
                User
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item" to={"/settings"}>Settings</Link></li>
                <li><Link className="dropdown-item" to="#">Help</Link></li>
                <li><Link className="dropdown-item" to={"/"}>Logout</Link></li>
            </ul>
        </NavItem>
    </Header>
    
    <div className='mt-5'>
      <Container>{ props.children }</Container>
    </div>
    </>
  )
}
