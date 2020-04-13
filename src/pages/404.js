import React from 'react';
import { Layout } from '../components/layout'
import {Link} from 'gatsby'


const NotFound = () => {

  return (
    <Layout>
      <h1>404: Not Found</h1>
      <h2> Algo deu errado! Não encontramos a página solicitada.</h2>
      <p> Retorne à página anterior ou <Link to="/">clique aqui</Link> para retornar para a página principal.</p>
    </Layout>
  )
}

export default NotFound;