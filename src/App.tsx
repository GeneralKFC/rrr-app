import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import LeftSide from './components/LeftSide/LeftSide'
import Main from './components/Main/Main'
import RightSide from './components/RightSide/RightSide'
function App() {
return(
  <div className='App'>
 <Header/>
 <LeftSide/>
 <RightSide/>
 <Main/>
 </div>
      )
}

export default App
