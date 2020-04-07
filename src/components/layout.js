import React from 'react';

export const Layout = ({ children }) => {
  //
  return (
    <div style={{
      margin: `3 rem auto`, maxWidth: 650, padding: `0 1rem`
    }}>
      {children}
    </div>
  )
}

export default Layout