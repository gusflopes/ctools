import React, {useState} from "react"
import { Link } from 'gatsby'
import { Layout } from '../components/layout'
import { Video } from '../components/video'
import axios from 'axios';
import MyDropZone from '../components/dropzone';
import { toast} from 'react-toastify'
// <iframe width="560" height="315" src="https://www.youtube.com/embed/w9TKHsKNlPI?start=3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


export default () => {
  const [file, setFile] = useState();

  async function handleFile(inputFile) {
    if (file !== undefined) return toast.error('Arquivo já importado. Para substituir recarregue a página.')
    const newFile = inputFile[0]
    if (newFile.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      return toast.error('Formato não suportado. Utilize a planilha exemplo ou o formulário.');
    }
    setFile(newFile);
    // const response = await importExcel(newFile); // voltar  Interface
    alert('need to fix')
    // if (process.env.NODE_ENV === 'development') console.log('final', response);
    alert('need to fix')
    // return setImported(response)
  }

  async function lambdaRequest() {
    // fetch("/.netlify/functions/hello")
    //   .then(response => response.json())
    //   .then(console.log)

    const response = await axios.get('/.netlify/functions/hello')
    console.log(response);
  }
  return (
    <Layout>
      <p>Hello World</p>
      <Link to="/app">Go to App</Link>{' '}
      <Link to="/blog">Go to Blog</Link>{' '}
      <button type="button" onClick={lambdaRequest}>Lambda</button>
      <button type="button" onClick={() => toast.error('Deu certo!?')}>Toast</button>

      <MyDropZone file={file} handleFile={handleFile} />
      <Video width="560" height="315" videoUrl="https://www.youtube.com/embed/w9TKHsKNlPI?start=3" videoTitle="CTools" />
    </Layout>
  )
}