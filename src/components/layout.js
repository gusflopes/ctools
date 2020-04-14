import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
// <div style={{margin: `3 rem auto`, maxWidth: 650, padding: `0 1rem`}}>

export const Layout = ({ children }) => {
  //
  return (
    <>
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="30" height="30" className="d-inline-block-allign-top" alt="React logo" />
            {' '}
            CTools: Lançamentos Contábeis
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/app2" className="nav-link">Importador Contábil</Link>
            <Link to="/instrucoes" className="nav-link">Instruções</Link>
            <Link to="/sobre" className="nav-link">Sobre</Link>

          </Nav>
          <Nav>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/app" className="nav-link">Área VIP</Link>
          </Nav>

        </Navbar.Collapse>

      </Navbar>
      <Container id="home" className="App">
        {children}
      </Container>
      <div style={{ backgroundColor: '#343A40', padding: '15px', marginTop: '30px', display: 'flex', flex: 1 }}>
        <span style={{ marginLeft: 'auto', marginRight: 'auto', color: "rgba(255,255,255,0.5)" }}>Desenvolvido por <a style={{ color: "rgba(255,255,255,0.5)" }} href="https://github.com/gusflopes" target="_blank" rel="noreferrer noopener"><strong> Gustavo Lopes</strong></a> e <a style={{ color: "rgba(255,255,255,0.5)" }} href="http://www.lscont.com.br" target="_blank" rel="noreferrer noopener"><strong> LSCONT</strong></a>. Todos os direitos reservados.</span>
      </div>
    </>
  )
}

export default Layout