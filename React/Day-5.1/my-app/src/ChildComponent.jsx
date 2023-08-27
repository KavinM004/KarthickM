// import React from 'react'

// function ChildComponent(props) {
//     const sentDataToParent=()=>{
//         const data="Hi!Kavin M";
//         props.onDataFromChild(data);
//     }
//   return (
//     <>
//     <h4>Child Component</h4>
//     <button onClick={sentDataToParent}>Transfer</button>
//     </>
//   )
// }

// export default ChildComponent

import React from 'react'

function ChildComponent(props) {
    const sentDataToParent=()=>{
        const nivak=("Hi!Kavin M,Good Morning");
        props.propsName(nivak);
    }
  return (
    <>
    {/* <h1>Child Component</h1> */}
    <button onClick={sentDataToParent}>Transfer Data</button>
    </>
  )
}

export default ChildComponent