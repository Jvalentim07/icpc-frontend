import React from "react"

import './layout.scss'

import NavBar from '../components/Navbar/Navbar'
import Logo from '../images/ICPC-Logo.png'

const LayoutPage = (prop) => {
  return (
    <div className="content">
      <NavBar />
      {prop.children}
      <div style={{ width: '100%', padding: '20px', backgroundColor: '#312682', height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
        <img src={Logo} width="70" height="70"/>
        <div style={{ color: 'whitesmoke', display: 'flex', height: '100%'}}>
          <div style={{ padding: '20px', height: '100%', borderRight: '2px solid whitesmoke' }}>
            <p>Example 1</p>
            <p>Example 2</p>
            <p>Example 3</p>
          </div>
          <div style={{ padding: '20px' }}>
            <p>Example 1</p>
            <p>Example 2</p>
            <p>Example 3</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutPage
