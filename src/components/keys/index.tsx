import { useState } from "react"
import Counter from "./counter"

const Keys = () => {
  const [item, setItem] = useState('shirt')

  return (
    <>
      <h1>Keys</h1>
      {item === 'shirt' ?
        <>
          <h2>Shirt</h2><Counter key="shirt" />
        </> :
        <>
          <h2>Pants</h2><Counter key="pants" />
        </>
      }
      <button onClick={() => setItem(item === 'pants' ? 'shirt' : 'pants')}>
        {item === 'pants' ? 'Switch to Shirt' : 'Switch to Pants'}
      </button>
    </>
  )
}

export default Keys
