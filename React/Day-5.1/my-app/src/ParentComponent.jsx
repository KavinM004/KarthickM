// import React, { useState } from 'react'
// import ChildComponent from './ChildComponent';

// function ParentComponent() {
//     const [receivedData,setReceivedData]=useState('');
//     const accessData=(data)=>{
//         setReceivedData(data);
//     }
//   return (
//     <>
//     <h1>Parent Component</h1>
//     <p>Display The received data From child : {receivedData}</p>
//     <ChildComponent onDataFromChild={accessData}/>
//     </>
//   )
// }

// export default ParentComponent

import React, { useState } from 'react'
import ChildComponent from './ChildComponent';

function ParentComponent() {
    const [receivedData,setReceivedData]=useState('');
    const dataFetch=(nivak)=>{
        setReceivedData(nivak);
    }
  return (
    <>
    {/* <h1>Parent Component</h1> */}
    <p>{receivedData}</p>
    <ChildComponent propsName={dataFetch}/>
    </>
  )
}

export default ParentComponent