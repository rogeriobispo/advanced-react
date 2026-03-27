import { useCallback, useEffect, useRef, useState } from 'react'

function UseCallbackAsRef() {
  const [isVisible, setIsVisible] = useState(false)
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleInputRef = useCallback((node: HTMLInputElement | null) => {
    inputRef.current = node

    if (node) {
      node.focus()
    }
  }, [])

  return (
    <section>
      <h2>useCallback como ref</h2>

      <button onClick={() => setIsVisible((currentValue) => !currentValue)}>
        switch
      </button>

      {isVisible && (
        <div>
          <input
            ref={handleInputRef}
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="Digite algo"
          />

          <p>Valor atual: {value || 'vazio'}</p>
        </div>
      )}
    </section>
  )
}

export default UseCallbackAsRef
