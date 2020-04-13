import React from "react"
import { Link } from 'gatsby'
import { Layout } from '../components/layout'
import { Video } from '../components/video'
import { Jumbotron, Button, Row, Col } from 'react-bootstrap'
import axios from 'axios';
import { toast } from 'react-toastify'
// <iframe width="560" height="315" src="https://www.youtube.com/embed/w9TKHsKNlPI?start=3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


export default () => {
// FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDFDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDFFDFDFFDFDFDFDFGDFFDFFDFFFDDFF

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
        <Link to="/instrucoes"><Button style={{margin: '15px 8px 15px 0px'}} variant="dark" onClick={() => toast.error('Deu certo!?')}>Como usar</Button></Link>
        <Link to="/importador"><Button variant="primary">Importar Lançamentos</Button></Link>
        {/* <Button variant="success" onClick={() => toast.error('Deu certo!?')}>Franscisco</Button> */}
        </Col>
      </Jumbotron>
    <Row>
      <Col lg="6" sm="12" style={{backgroundColor: '#7159c1'}}>
      <Video width="560" height="315" videoUrl="https://www.youtube.com/embed/w9TKHsKNlPI?start=3" videoTitle="CTools" />
      </Col>
      <Col lg="4" sm="12">
        <h4>Some tagline here</h4>
      </Col>
    </Row>

    </Layout>
  )
}