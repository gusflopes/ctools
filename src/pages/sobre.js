import React from "react"
import { Link } from 'gatsby'
import { Layout } from '../components/layout'

export default () => {

  return (
    <Layout >
      <h1 style={{marginTop: '18px'}}>Sobre</h1>
      <p>A <strong>CTools</strong> é uma startup de tecnologia que desenvolve ferramentas tecnológicas focadas em gestão financeira e contábil.</p>
      <p>Nosso <strong>foco</strong> é a automatização de processos e procedimentos, utilizando de todas as ferramentas à nossa disposição para eliminar trabalhos burocráticos e manuais, permitindo que os gestores/contadores possam se dedicar à verdadeira Gestão Financeira das organizações.</p>
      <p>Essa <strong>ferramenta</strong> é apenas um exemplo de uma funcionalidade relativamente simples, mas que pode simplificar muito o dia a dia dos contadores.</p>
      <h2>O que vem pela frente?</h2>
      <p>Continuamos desenvolvendo outras ferramentas, algumas inclusive já em funcionamento, sendo que neste ano de 2020 nosso objetivo é consolidar nossas ferramentas em uma solução mais abrangente que possa atender de forma assertiva as necessidades de nossos usuários.</p>
      <p>A título de exemplo, possuímos algumas ferramentas de análise tributária automatizada, emissão de notas fiscais, além de geração de lançamentos contábeis automatizados a partir de comprovantes bancários em PDF.</p>
      <h2>Nossas ferramentas</h2>
      <p>De qualquer forma, fique tranquilo que as ferramentas que liberamos de forma gratuita continuarão sendo gratuitas,</p>
      <p>Inclusive, nosso portfólio de ferramentas gratuitas ainda vai aumentar, sendo que estamos sempre abertos à sugestões sobre outras ferramentas que poderiam impactar positivamente o mercado contábil.</p>
      <h2>Envie sua sugestão</h2>
      <p>Agradecemos seu interesse pela <strong>CTools</strong> e contamos com sua colaboração para nos enviar <Link to="/"><strong>sugestões</strong></Link>s de funcionalidades que poderiam ser boas inclusões ao portfólio da CTools.</p>
    </Layout>
  )
}