import React from 'react'

const Home = ({ user }) => {
  return (
    <div>
      <h1>Olá, {user.name ? user.name : "amigo"}!</h1>
      <p>Esta seção ainda está em desenvolvimento. <br />
  Por enquanto estamos focando nas funcionalidades que estão disponíveis para todos os usuários, não havendo necessidade de utilizar essa área por enquanto. <br />
  Se você está acessando esta área é provavelmente estamos a utilizando em testes, mas logo será desativada novamente.</p>
    </div>)
}

export default Home