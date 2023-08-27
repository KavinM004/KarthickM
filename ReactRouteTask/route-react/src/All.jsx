import React from 'react'
import FullStackDeveloper from './FullStackDeveloper'
import CyperSecurity from './CyperSecurity'
import Career from './Career'

function All() {
  return (
    <>
    <div id='container'>
        <h2 className='h2'>All Courses</h2>
        <div className='co'>
            <ul className='all-div-2'>
                <li className='all-li'>Full Stack Developer</li>
                <li className='all-li'>Cyper Security</li>
                <li className='all-li'>Career</li>
            </ul>
        </div>
    </div>
    <FullStackDeveloper />
    <CyperSecurity />
    <Career />
    </>
  )
}

export default All