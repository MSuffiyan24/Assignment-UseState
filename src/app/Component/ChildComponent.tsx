import React from 'react'

const ChildComponent = (props: any) => {
  console.log(props);
  
  return (
    <div>
      <h1 className='text-3xl font-bold text-center mt-20'>{props.name}</h1>
    </div>
  )
}

export default ChildComponent
