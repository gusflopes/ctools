import React from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
// <div style={{margin: `3 rem auto`, maxWidth: 650, padding: `0 1rem`}}>

export const Layout = ({ children }) => {
  //
  return (
    <Container id="home" className="App">
      <ToastContainer autoClose={3000} />
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Link to="/">
            <Navbar.Brand>
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="30" height="30" className="d-inline-block-allign-top" alt="React logo" />
              {' '}
            CTools: Lançamentos Contábeis
          </Navbar.Brand>
          </Link>
        </Nav>
        <Nav>
          <Link to="/importador" className="nav-link">Ferramentas</Link>
          <Link to="/instrucoes" className="nav-link">Instruções</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/app" className="nav-link">Área VIP</Link>
        </Nav>
        <Nav />
      </Navbar>
      {children}
    </Container>
  )
}

export default Layout