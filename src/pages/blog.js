import React from 'react';
import {handleSomething, handleSomethingElse} from '../lib/index'
import {Layout} from '../components/layout'

const Blog = () => {

  async function handlerOne() {
    const response = await handleSomething();
    console.log(response)
  }

  async function handlerTwo() {
    const response = await handleSomethingElse();
    console.log(response)
  }

  return (
    <Layout>
      <h1>Blog Page...</h1>
      <button onClick={handlerOne}>something</button>
      <button onClick={handlerTwo}>something else</button>
    </Layout>
  )
}

export default Blog;