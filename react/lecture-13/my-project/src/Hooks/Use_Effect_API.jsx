import React from 'react'
import { useState , useEffect } from 'react'

const Use_Effect_API = () => {
    const [ userlist , setUserList] = useState([])
    console.log(userlist);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
       .then((res) => res.json())
       .then((json) => setUserList(json))
    }, [])

  return (
    <div>
      <table>
        <tr>
            {
                userlist.map((item) => <div>
                    {item.name}
                </div>)
            }
        </tr>
      </table>
    </div>
  )
}

export default Use_Effect_API
