import React from 'react';
import { Header } from '../Header';
import { Link } from "react-router-dom";
import { Container, NavItem } from 'react-bootstrap';


export function AuthLayout(props) {
  return (
    <>
    <Header>
        <NavItem>
            <Link className="nav-link" to={"/"}>Login</Link>
        </NavItem>
        <NavItem>
            <Link className="nav-link" to={"/register"}>Register</Link>
        </NavItem>
    </Header>
    <div className='mt-5'>
      <Container>{ props.children }</Container>
    </div>
    </>
  );
}