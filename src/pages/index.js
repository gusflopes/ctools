import React from "react"
import { Link } from 'gatsby'

export default () => (
  <div>
    <p>Hello World</p>
    <Link to="/app">Go to App</Link>{' '}
    <Link to="/blog">Go to Blog</Link>{' '}
  </div>
)