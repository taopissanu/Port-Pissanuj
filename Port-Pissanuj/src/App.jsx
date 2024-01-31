import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Content from './component/Content'
import Navbar from './component/Navbar'
import Content2 from './component/Content2'
import Content3 from './component/Content3'

  function App() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <Navbar />
        <div className='App'>
          <Header />
          <Content />
          <Content2 />
          <Content3 />
          <Footer />
        </div>
      </>
    )
  }

  
  export default App
