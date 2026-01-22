import React from "react"
import { useEffect, useState } from "react"

const DataSetContainer = ({ children, getData, resourceName }) => {
  const [resource, setResource] = useState()
  useEffect(() => {
    (async () => {
      const data = await getData()
      setResource(data)
    })()
  }, [getData])

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

export default DataSetContainer
