import React from "react"
import { Link } from 'gatsby'
import { Layout } from '../components/layout'
import { Video } from '../components/video'
import axios from 'axios';
// <iframe width="560" height="315" src="https://www.youtube.com/embed/w9TKHsKNlPI?start=3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


export default () => {
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


      <Video width="560" height="315" videoUrl="https://www.youtube.com/embed/w9TKHsKNlPI?start=3" videoTitle="CTools" />
    </Layout>
  )
}