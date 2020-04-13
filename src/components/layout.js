import React from 'react';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const Layout = ({ children }) => {
  //
  return (
    <div style={{
      margin: `3 rem auto`, maxWidth: 650, padding: `0 1rem`
    }}>
      <ToastContainer autoClose={3000} />
      {children}
    </div>
  )
}

export default Layout