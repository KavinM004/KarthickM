import React from 'react'
import { BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import StudentList from './StudentList'

function App() {

  return (
    <>
    <title>Kavin</title>
  <Router>
    <div className='container'>
      <nav>
        <ol>
          <li>
            <Link to={'/'}>Home</Link>
            {/* <Link to={'/StudentList/Kavin'}>Kavin M</Link> */}
            </li>
          <li>
            <Link to={'/Contact'}>contact</Link>
            {/* <Link to={'/StudentList/Dharun'}>Dharun M</Link> */}
            </li>
          <li>
            <Link to={'/About'}>About</Link>
            {/* <Link to={'/StudentList/Nirmal'}>Nirmal M</Link> */}
            </li>
        </ol>
      </nav>
      <Routes>
        <Route path='/' exact Component={Home}></Route>
        <Route path='/Contact' Component={Contact}></Route>
        <Route path='/About' Component={About}></Route>
        {/* <Route path='/StudentList/:name' Component={StudentList}></Route> */}
      </Routes>
    </div>
  </Router>
    </>
  )
}

export default App
