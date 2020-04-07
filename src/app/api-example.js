import React, { useState, useEffect } from 'react'
import { api } from '../utils/api';

const ApiExample = ({ user }) => {
  // const [input, setInput] = useState();
  const [githubUser, setGithubUser] = useState();
  // const {email} = user

  // useEffect(() => {
  //   console.log('recebeu resposta do Github')
  //   console.log(githubUser)
  // }, [githubUser])

  useEffect(() => {
    (async () => {
      const user = await api.get(`/users/gusflopes`)
      setGithubUser(user);
    })()
  }, [])

  return (
    <div>
      <div>
        <h1>Authenticated User</h1>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <code>{JSON.stringify(user, null, 2)}</code>
      </div>
      <div>
        <h1>Github User</h1>
        {githubUser && (
          <>
            <h2>{githubUser.login}</h2>
            <p>{githubUser.email}</p>
            <code>{JSON.stringify(githubUser, null, 2)}</code>
          </>)}
      </div>
    </div>
  )
}
export default ApiExample
