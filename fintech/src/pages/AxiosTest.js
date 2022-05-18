import React, { useState } from 'react'
import AppBar from '../components/common/AppBar';
import axios from 'axios';

const AxiosTest = () => {
  const [data, setData] = useState();

  const handleClick = ()=>{
    // console.log('hello')
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-04-18&sortBy=publishedAt&apiKey=331e819362cb42b29bafe33145ab6dcc'
    
    axios.get(url).then((response) => {
      console.log(response.data)
      setData(response.data)
    });
    //비동기라서 얘가 먼저 실행됨
    console.log('hello')
  }

  return (
    <>
      <AppBar title={"통신테스트"}/>
      <button onClick={()=>handleClick()}>data request</button>
      {/* {data.map((coffee)=> {
        return <p>{coffee.}</p>
      })} */}
    </>
  )
}

export default AxiosTest