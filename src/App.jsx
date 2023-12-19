import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyFrame from './components/MyFrame.jsx'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  return (
    <div className='container'>
        <Header />
        <Main />
        <Footer />

    </div>
  )
}

export default App
