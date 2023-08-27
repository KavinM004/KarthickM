import React from 'react'
import './App.css'
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom'
import All from './All'
import FullStackDeveloper from './FullStackDeveloper'
import CyperSecurity from './CyperSecurity'
import Career from './Career'


function App() {

  return (
    <>
    <div>
      
      <h1>Router Task</h1>
    </div>
    <Router>
      <div>
        <nav>
          <ul className='list'>
            {/* <li className='link1'> */}
              <Link className="comp"to={'/'}>All</Link>
            {/* </li> */}
            {/* <li className='link2'> */}
              <Link className="comp"to={'/FullStackDeveloper'}>FullStackDeveloper</Link>
            {/* </li>
            <li className='link3'> */}
              <Link className="comp"to={'/CyperSecurity'}>CyperSecurity</Link>
            {/* </li>
            <li className='link4'> */}
              <Link className="comp"to={'/Career'}>Career</Link>
            {/* </li> */}
          </ul>
        </nav>
        <Routes>
          <Route path='/'  exact Component={All}></Route>
          <Route path='/FullStackDeveloper'  Component={FullStackDeveloper}></Route>
          <Route path='/CyperSecurity'  Component={CyperSecurity}></Route>
          <Route path='/Career'  Component={Career}></Route>
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
