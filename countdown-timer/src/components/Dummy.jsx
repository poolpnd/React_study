import React, {useContext}from 'react'
import { CountContext } from '../contexts/counter-context'

export default function Dummy() {

  const {count, setCount} = useContext(CountContext)

  return (
    <div>
      Dummy 2 
      <br />
      {count}
    </div>
  )
}
