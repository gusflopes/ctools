import React from 'react'
const Settings = ({ user }) => (
  <div>
    <h1>Profile</h1>
    <img src={user.picture} alt="Profile" />

    <h2>{user.name}</h2>
    <p>{user.email}</p>
    <code>{JSON.stringify(user, null, 2)}</code>
  </div>
)
export default Settings
