import React from 'react'
import {useParams}from 'react-router-dom'

function StudentList() {
    const {name}=useParams();
    const gradeInfo={
        Kavin: "Name:Kavin M, Age:21, Grade:A+",
        Dharun: "Name:Dharun M, Age:22, Grade:A",
        Nirmal: "Name:Nirmal M, Age:23, Grade:A"
    }

    const info=gradeInfo[name];
  return (
    <>
    <h2>{name}</h2>
    <h4>{info}</h4>
    </>
  )
}

export default StudentList