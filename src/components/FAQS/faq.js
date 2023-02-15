import React, {useState} from 'react'


function Faq() {
  const [count, setCount] = useState(0);
  const handle =()=>{
    setCount('hyyyyyyyyyyy')
  }
  return (
    <div onClick={handle}>{count}</div>
  )
}

export default Faq