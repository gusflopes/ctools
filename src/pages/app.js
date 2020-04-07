import React from "react"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile } from '../utils/auth'
import { Link } from "gatsby"

// Pages
import Home from '../app'
import Settings from '../app/settings'
import Billing from '../app/billing'

const App = () => {
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
        <a href="#logout" onClick={e => {
          logout()
          e.preventDefault()
        }}
        >Logout
        </a>
      </nav>
      <Router>
        <Home path="/app" user={user} />
        <Settings path="/app/settings" />
        <Billing path="/app/billing" />
      </Router>
    </>
  )
}

export default App