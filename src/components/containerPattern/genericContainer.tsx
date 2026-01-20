import React from "react"
import { useEffect, useState } from "react"

const GenericContainer = ({ children, resourceUrl, resourceName }) => {
  const [resource, setResource] = useState()
  useEffect(() => {
    (async () => {
      const res = await fetch(resourceUrl)
      const data = await res.json()
      setResource(data)
    })()
  }, [resourceUrl])

  return (
    <>
      {
        React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { [resourceName]: resource ? resource : {} })
          }
        })
      }
    </>

  )

}

export default GenericContainer
