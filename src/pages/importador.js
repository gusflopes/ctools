import React, { useState } from "react"
import { Link } from 'gatsby'
import { Layout } from '../components/layout'
import axios from 'axios';
import MyDropZone from '../components/dropzone';
import { toast } from 'react-toastify'
import { Row, Col, FormGroup, FormLabel, FormControl, FormText, Button } from 'react-bootstrap'
// <iframe width="560" height="315" src="https://www.youtube.com/embed/w9TKHsKNlPI?start=3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

import { xls2dom } from '../lib/pastedExcelParser'
import { generateOutput } from '../lib/generateOutput'
import { importExcel } from '../lib/handleFile'
import { base64ToArrayBuffer, saveByteArray } from '../lib/exportFile'

export default () => {
  const [file, setFile] = useState();
  const [lancamentos, setLancamentos] = useState();
  const [cnpj, setCnpj] = useState();
  const [user, setUser] = useState('');
  const [imported, setImported] = useState([]);

  async function handleFile(inputFile) {
    if (file !== undefined) return toast.error('Arquivo já importado. Para substituir recarregue a página.')
    const newFile = inputFile[0]
    if (newFile.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      return toast.error('Formato não suportado. Utilize a planilha exemplo ou o formulário.');
    }
    setFile(newFile);
    const response = await importExcel(newFile); // voltar  Interface
    if (process.env.NODE_ENV === 'development') console.log('final', response);
    return setImported(response)
  }

  async function handleSubmit(e) {
    // testing(cnpj, user, lancamentos)
    if (!lancamentos && !file) return toast.error('Você deve importar um arquivo ou preencher o campo Lançamentos Contábeis.')
    if (lancamentos) {
      try {
        const response = await xls2dom(lancamentos);
        const { id, data, valor, debito, credito, historico } = response[0]
        if (!id || !data || !valor || !debito || !credito || !historico) throw new Error('testando!')
        return setImported(response);
      } catch (err) {
        toast.error('Erro na importação: Você deve colar a planilha no formulário ou importar o arquivo.')
        if (process.env.NODE_ENV) console.log(err);
      }
    }
    if (file) {
      return toast.error('Arquivo xlsx já importado. Clique em exportar.')
    }
  }
  async function handleExport(e) {
    // if (!file) console.log('Não foram importados arquivos...')
    if (!imported) return toast.error('Você deve importar os dados primeiro!')

    if (!cnpj || !user) return toast.error('Campos Usuário e CNPJ são obrigatórios')
    // if (imported && cnpj && user) {

    const outputContent = await generateOutput(imported, cnpj, user);

    // New Solution
    const base64Output = btoa(outputContent)
    const arrayBuffer = base64ToArrayBuffer(base64Output);
    saveByteArray("output.txt", arrayBuffer);
    return toast.success('Exportação finalizada.');
  }

  async function lambdaRequest() {
    // fetch("/.netlify/functions/hello")
    //   .then(response => response.json())
    //   .then(console.log)

    const response = await axios.get('/.netlify/functions/hello')
    console.log(response);
  }
  return typeof window !== 'undefined' && (
    <Layout>
      <Row style={{ marginTop: '15px' }}>
        <Col lg={6} md={6} sm={12} xs={12} >
          <FormGroup controlId="formCnpj">
            <FormLabel>CNPJ</FormLabel>
            <FormControl type="text" placeholder="Digite CNPJ da empresa" value={cnpj} onChange={e => setCnpj(e.currentTarget.value)} />
            <FormText>Digite apenas números.</FormText>
          </FormGroup>
          <FormGroup controlId="usuario">
            <FormLabel>Usuário</FormLabel>
            <FormControl type="text" placeholder="Digite o Usuário Domínio Sistemas" value={user} onChange={e => setUser(e.currentTarget.value)} />
            <FormText>Nome do Usuário que constará no arquivo de importação.</FormText>
          </FormGroup>
          <FormGroup controlId="lancamentos">
            <FormLabel>Lançamentos Contábeis</FormLabel>
            <FormControl
              as="textarea"
              rows="4"
              value={lancamentos}
              onChange={e => setLancamentos(e.currentTarget.value)}
              placeholder="Anexe uma planilha do Excel ou cole aqui sua tabela de lançamentos contábeis"
            />
          </FormGroup>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} >
          <MyDropZone file={file} handleFile={handleFile} />
        </Col>
      </Row>
      <Row style={{ marginTop: '15px', justifyContent: 'center' }} >
        <Col xs={12} sm={12} md={6} lg={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant={!file ? "outline-primary" : "outline-secondary"}
            disabled={file ? true : false}
            size="lg"
            style={file ? { margin: '0 30px', cursor: 'not-allowed' } : { margin: '0 30px' }}
            onClick={handleSubmit}
          >Carregar</Button>
          <Button variant="success" size="lg" style={{ margin: '0 30px' }} onClick={handleExport}>Exportar</Button>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <a href="https://gusflopes-dev-assets.s3.amazonaws.com/ctools/example.xlsx"><span style={{ display: 'block', textAlign: 'center', alignSelf: 'center' }}>Download Planilha Modelo</span></a>
        </Col>
      </Row>
      <Row style={{ marginTop: '30px' }} >
        <Col lg={12}>
          {imported && (
            <table className="table table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Data</th>
                  <th scope="col">Débito</th>
                  <th scope="col">Crédito</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Histórico</th>
                </tr>
              </thead>
              <tbody>
                {imported.map(i => (<tr key={`lcto-${i?.id}`}>
                  <th scope="row">{i?.data}</th>
                  <td>{i?.debito}</td>
                  <td>{i?.credito}</td>
                  <td>{i?.valor}</td>
                  <td>{i?.historico}</td>
                </tr>))}
              </tbody>
            </table>)}
        </Col>
      </Row>
      <Row>
        <footer style={{ marginLeft: 'auto', marginRight: 'auto' }} >
          <span>Desenvolvido por <a href="https://github.com/gusflopes" target="_blank" rel="noreferrer noopener"><strong>Gustavo Lopes</strong></a> e <a href="http://www.lscont.com.br" target="_blank" rel="noreferrer noopener"><strong>LSCONT</strong></a>. Todos os direitos reservados.</span>
        </footer>
      </Row>

    </Layout>
  )
}