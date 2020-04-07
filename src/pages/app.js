import React from "react"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile } from '../utils/auth'
import { Link } from "gatsby"

const Home = ({ user }) => {
  return <p>Olá, {user.name ? user.name : "amigo"}!</p>
}
const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>

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