import React from "react"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile } from '../utils/auth'
import { Link } from "gatsby"

// Pages
import Home from '../app'
import Settings from '../app/settings'
import Billing from '../app/billing'
import ApiExample from '../app/api-example'

const App = () => {

  // All the logic should be handled here !?
  // Don't go nuts with a lot of function
  if (!isAuthenticated()) {
    login()
    return <p>Redirecionando para login...</p>
  }

  const user = getProfile()

  return (
    <>
      <nav>
        <Link to="/app">Home</Link>{" "}
        <Link to="/app/settings">Settings</Link>{" "}
        <Link to="/app/billing">Billing</Link>{" "}
        <Link to="/app/github">GitHub Profile</Link>{" "}
        <a href="#logout" onClick={e => {
          logout()
          e.preventDefault()
        }}
        >Logout
        </a>
      </nav>
      <Router>
        <Home path="/app" user={user} />
        <Settings path="/app/settings" user={user} />
        <Billing path="/app/billing" />
        <ApiExample path="/app/github" user={user} />
      </Router>
    </>
  )
}

export default App