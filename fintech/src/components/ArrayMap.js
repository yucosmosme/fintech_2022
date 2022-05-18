import React, { useState } from 'react'
import Welcome from './Welcome';

const ArrayMap = () => {

  const [users, setUsers] = useState([
    { username: "홍길동", age: 12, height: 180 },
    { username: "동", age: 18, height: 180 },
    { username: "길동", age: 16, height: 180 },
  ]);

  return (
    <div>
      {
        users.map(user=>{
          return (
            <Welcome username={user.username} age={user.age}/>
          )
        })
      }
    </div>
  )
}

export default ArrayMap