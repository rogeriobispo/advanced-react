import { useEffect, useState } from "react"

const GenericContainerWithRender = ({ getData, render }) => {
  const [resource, setResource] = useState()
  useEffect(() => {
    (async () => {
      const data = await getData()

      setResource(data)
    })()
  }, [getData])

  if (!resource) {
    return <div>Loading...</div>
  }

  return render(resource)

}

export default GenericContainerWithRender
