import React from 'react'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'

export const Header = (props) => {
  return (
    <>
    <Navbar expand="lg" className="navbar-dark bg-dark">
      <Container>
          <NavbarBrand href="#">Online Book Store</NavbarBrand>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <NavbarCollapse id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
                { props.children }
            </ul>
          </NavbarCollapse>
      </Container>
    </Navbar>
    </>
  )
}
