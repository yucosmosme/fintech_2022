// rafce 쓰면 자동완성
// React Arrow Function Component With ES7
// react extension 깔려있어야 함
import React, { useState } from 'react'


const StateAndEvent = () => {

  const [userText, setUserText] = useState();
  
  const handleClick = () => {
    setUserText();
  }

  const handleChange = (event) => {
    const {value}= event.target
    // console.log(value)
    setUserText(value)
  }

  return (
    <>
      <p>사용자 입력 내용: {userText}</p>
      <input onChange={handleChange} ></input>
      <button onClick={handleClick}>reset</button>
    </>
  )
}

export default StateAndEvent