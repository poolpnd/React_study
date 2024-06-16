import React from 'react'
import {BsStopwatch} from "react-icons/bs"
import styled from 'styled-components'

const TimerWrapper = styled.div`
  margin-top:30vh;
  wdith: 600px;
  margin-left: auto;
  margin-right: auto;
  background-color: #222;
  color : #eee;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sahdow 5px 4px 6px ( 0,0,0,0.4);
  padding 1rem 0;

  .stop-watch{
    font-size:5rem;
    margin-right: 1rem;
  }

  label{
    margin-bottom:0.5rem;
  }

  input{
    width:100px;
    margin-right: 1rem;
    color: #282c34;
    outline: none;
    border: none;
    font-szie: 4.5rem;
    font-weight: 600;
    text-align: center;
    padding: 0rem 0.5rem;
    border-radius: 5px;
  }

  input:hover{
    background-color:#928f8f;
  }
`

export default function Timer({ms, ss, mm, hh, changeSeconds, changeMins, changeHours}) {
  return (
    <TimerWrapper>
      <BsStopwatch className='stop-watch'/>
      <div className='d-flex flex-column'>
        <label >hh</label>
        <input value={hh} onChange ={changeHours}/>
      </div>{" "}
      <div className='d-flex flex-column'>
        <label >mm</label>
        <input value={mm} onChange ={changeMins}/>
      </div>{" "}
      <div className='d-flex flex-column'>
        <label >ss</label>
        <input value={ss} onChange ={changeSeconds}/>
      </div>{" "}
      <div className='d-flex flex-column'>
        <label >ms</label>
        <input value={ms} />
      </div>
    </TimerWrapper>
  )
}
