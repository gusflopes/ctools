import React from 'react'

const Home = ({ user }) => {
  return <p>Olá, {user.name ? user.name : "amigo"}!</p>
}

export default Home