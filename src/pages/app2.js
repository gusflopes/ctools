import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import LctosContabeis from '../components/xls2dom'
import { Layout } from '../components/layout';
import { ToastContainer } from 'react-toastify'



const AppV2 = () => {
  const [isClient, setClient] = useState(false)
  const key = isClient ? "client" : "server"

  useEffect(() => {
    setClient(true);
  }, [])

  if (!isClient) return null;

  // if (!isClient) return null;
  return typeof window !== 'undefined' && (
    <Layout key={key}>
      <ToastContainer autoClose={3000} />
      <Router basepath="/app2">
        <LctosContabeis path="/" />
      </Router>
    </Layout>
  )
}

export default AppV2;