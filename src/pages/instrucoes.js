import React from 'react';
import {Layout} from '../components/layout'
import {Accordion, Card} from 'react-bootstrap'

const InstructionsPage = () => {

  return (
    <Layout>
      <h1>FAQ: Importador CTools</h1>
      <p>Ficou com alguma dúvida de como utilizar o Importador de Lançamentos da CTools? Abaixo tentamos responder as principais dúvidas com a utilização do mesmo.</p>
      <p> Se ainda assim houverem dúvidas, basta nos mandar uma mensagem pelo formulário no final da página que vamos responder o mais breve possível</p>

      <Accordion defaultActiveKey="0">
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <strong>1 - O que é o Importador de Lançamentos Contábeis da CTools?</strong>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>O <strong>Importador Contábil</strong> da CTools é uma ferramenta para converter lançamentos contábeis de uma planilha de Excel para um arquivo de importação no padrão utilizado pelo <strong>Domínio Sistemas</strong>, facilitando a inserção de lançamentos contábeis no Domínio Sistemas.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              <strong>2 - Quem é e o que faz a CTools?</strong>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>A CTools é uma startup de tecnologia cujo objetivo é criar ferramentas tecnológicas para facilitar as atividades rotineiras do Contador. Atualmente estamos incubadas na LSCONT - Lopes Contabilidade e desenvolvendo ferramentas tanto para uso interno quanto para o público em geral.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              <strong>3 - Por que o Importador de Lançamentos Contábeis da CTools foi criado?</strong>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <p>O Importador de Lançamentos Contábeis da CTools foi criado para solucionar um problema prático na LSCONT: a dificuldade e/ou demora em efetuar os lançamentos contábeis diretamente no Domínio Sistemas. <br/>
              O procedimento de de cadastrar um lançamento no Domínio Sistemas é lento pois precisamos gravar os lançamentos um a um, não permitindo uma interação mais dinâmica em caso de necessidade de alterar os registros, diferentemente do que ocorre com o Excel.
            </p></Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              <strong>4 - O Importador de Lançamentos Contábeis da CTools é realmente grátis?</strong>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>SIM! Esta versão do Importador de Lançamentos Contábeis é grátis e permanecerá grátis permitindo seu uso sem qualquer tipo de limitação. A única limitação é que este importador funciona com uma planilha já pronta, sendo que nos campos Débito e Crédito, o sistema aceita apenas os Códigos Reduzidos das Contas contábeis, e não sua descrição.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              <strong>5 - Por que o Importador de Lançamentos Contábeis da CTools usa planilhas como fonte de dados?</strong>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>Existem várias soluções de mercado que oferecem, além de um sistema de gestão financeira completo, a possibilidade de exportar os lançamentos contábeis diretamente para o Sistema Contábil. Ocorre que em alguns casos não há necessidade de um sistema de gestão financeira, ou ainda o cliente não aceita a utilização de um sistema de gestão financeira. A solução da CTools resolve esse problema permitindo que planilhas de controle financeiro sejam facilmente convertidas em lançamentos contábeis a serem importados para seu Sistema Contábil.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
              <strong>6 - Meu sistema financeiro já exporta os lançamentos contábeis. Ainda assim o Importador de Lançamentos Contábeis da CTools pode ser útil para mim?</strong>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
                <p>Claro!<br />
                  Quantas vezes você já não teve que fazer pequenos ajustes nos lançamentos contábeis excluindo alguns ou um grupo de lançamentos e tendo que refazer aqueles lançamentos, ou ainda corrigir vários lançamentos um a um? <br/>
                  Com o importador do CTools você pode simplesmente fazer uma exclusão em lote dos lançamentos, e gerar os novos lançamentos para importar apenas aqueles que necessitam de retificação.<br />
                  Como o sistema é muito rápido, você pode deixar uma planilha aberta e simplesmente ir copiando e colando os lançamentos que quer gerar, gerando assim vários arquivos de importação com muito mais praticidade do que corrigir os lançamentos um a um diretamente no sistema contábil.
                </p>
              </Card.Body>
          </Accordion.Collapse>
        </Card>

      </Accordion>
      {/* <div style={{marginTop: '30px'}}>
        <h2>Subtitulo</h2>
        <p>Lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum </p>

      </div> */}
    </Layout>
  )
}

export default InstructionsPage;