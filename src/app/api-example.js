import React, { useState, useEffect } from 'react'
import { api } from '../utils/api';

const ApiExample = ({ user }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [githubUser, setGithubUser] = useState();
  // const {email} = user

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setGithubUser('')
    await fetchGithub()
  }

  const fetchGithub = async () => {
    try {
      const user = await api.get(`/users/${input}`)
      setGithubUser(user)
      setLoading(false);
      return setInput('');
    } catch (err) {
      console.log(err);
      setLoading(false)
    }
  }


  useEffect(() => {
    (async () => {
      setLoading(false)
    })()
  }, [])

  return (
    <div>
      <div>
        <form onSubmit={event => handleSubmit(event)}>
          <label htmlFor="githubUser" >Pesquisar usuário do Github</label>
          <input name="githubUser" value={input} onChange={e => setInput(e.target.value)} />
          <button type="submit">Pesquisar</button>
        </form>
      </div>
      <div>
        <h1>Authenticated User</h1>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <code>{JSON.stringify(user, null, 2)}</code>
      </div>
      <div>
        <h1>Github User</h1>
        {loading ? <h2>Carregando...</h2> : githubUser ? githubUser && (
          <>
            <h2>{githubUser.login}</h2>
            <p>{githubUser.email}</p>
            <code>{JSON.stringify(githubUser, null, 2)}</code>
          </>) : <h2>Usuário não localizado</h2>}
      </div>
    </div>
  )
}
export default ApiExample
