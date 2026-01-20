import React from "react"
import { useEffect, useState } from "react"

const UserFetchContainer = ({ children }) => {
  const [users, setUsers] = useState()
  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await res.json()
      setUsers(data)
    })()
  }, [])

  return (
    <>
      {
        React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { data: users ? users[0] : {} })
          }
        })
      }
    </>

  )

}

export default UserFetchContainer
