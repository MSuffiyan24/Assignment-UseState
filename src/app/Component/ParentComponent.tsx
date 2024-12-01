import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
let name = "Muhammad Suffiyan";
let f_name = "Sohail"

  return (
    <div>
      <ChildComponent name={name}/>
    </div>
  )
}

export default ParentComponent
