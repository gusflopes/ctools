import React, { useEffect } from "react"
import { Link, navigate } from 'gatsby'
import { Layout } from '../components/layout'
import { Video } from '../components/video'
import { Jumbotron, Button, Row, Col } from 'react-bootstrap'
import axios from 'axios';
import { FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa/index.esm'
import { ContactForm } from '../components/contact';

export default () => {
  useEffect(() => {
    async function handleNavigate(destination) {
      navigate(destination)
    }
  })

  async function lambdaRequest() {
    // fetch("/.netlify/functions/hello")
    //   .then(response => response.json())
    //   .then(console.log)
    const response = await axios.get('/.netlify/functions/hello')
    console.log(response);
  }

  return (
    <Layout>
      {/* <div style={{backgroundColor: 'blue'}}>OLHA só</div> */}
      <Jumbotron>
        <Col lg="8" md="8" sm="12" xs="12">
          <h1>CTools</h1>
          <h3>Importar lançamentos contábeis sem complicação</h3>
          <p>A Ferramenta Importação de Lançamentos Contábeis da CTools gera automaticamente o arquivo de importação de Lançamentos Contábeis do Domínio Sistemas a partir de uma simples planilha de Excel.</p>
          <Link to="/instrucoes"><Button style={{ margin: '15px 8px 15px 0px' }} variant="dark">Como usar</Button></Link>
          <Link to="/app2"><Button variant="primary">Importar Lançamentos</Button></Link>
        </Col>
      </Jumbotron>
      <div className="border-top my-4" />
      <Row>
        <Col lg="8" sm="12" /* style={{ padding: 0 }} */>
          <Video videoUrl="https://www.youtube.com/embed/w9TKHsKNlPI?start=3" videoTitle="CTools" />
        </Col>
        <Col lg="4" sm="12" className="my-auto text-right" >
          <h4>Importação Simplificada</h4>
          <p>Importação de lançamentos contábeis de forma simples e descomplicada.</p>
        </Col>
      </Row>
      <div className="border-top my-4" />
      <Row>
        <Col lg="4" sm="12" className="my-auto text-left">
          <h4>Como Funciona?</h4>
          <p>Basta preparar uma planilha no Excel que a CTools gera o arquivo de importação para você.</p>
        </Col>
        <Col lg="8" sm="12" style={{ display: 'block' }}>
          <Video videoUrl="https://www.youtube.com/embed/w9TKHsKNlPI?start=3" videoTitle="CTools" />
        </Col>
      </Row>
      <div className="border-top my-4" />
      <h3 style={{ textAlign: "center", marginBottom: '30px' }}>CONTATO</h3>
      <Row>
        <Col lg="6" sm="12" /* style={{ padding: 0 }} */>
          <ContactForm />
        </Col>
        <Col lg="1" sm="0" />
        <Col lg="4" sm="12" className="my-auto text-center" >
          <h4>Redes Sociais</h4>
          <p>Gostou ou ficou com alguma dúvida? Entre em contato conosco.</p>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "15px 60px 15px" }}>
            <a href="https://www.facebook.com/lscontms" target="_blank" rel="noopener noreferrer"><FaFacebook size={48} color="#343a40" /></a>
            <a href="https://www.youtube.com/channel/UCKy7ieiiR20K8r8nW6zalSg/featured" target="_blank" rel="noopener noreferrer"><FaYoutube size={48} color="#343a40" /></a>
            <a href="https://www.linkedin.com/in/gusflopes/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={48} color="#343a40" /></a>
          </div>
        </Col>
        <Col lg="1" sm="0" />
      </Row>
      <div className="border-top my-4" />
      <Button variant="success" onClick={lambdaRequest}>Lambda Function</Button>


    </Layout>
  )
}