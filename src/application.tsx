import { useState, useCallback } from 'react'
import { Prompt } from './components/prompt'
import './application.css'

export function Application() {
  const [count, setCount] = useState(1)
  const [resetKey, setResetKey] = useState(0)

  const onClear = useCallback(() => {
    setResetKey(k => k + 1)
    setCount(1)
  }, [])

  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <Prompt key={`${resetKey}-${i}`} onClear={onClear} onDone={i === count - 1 ? () => setCount(c => c + 1) : undefined} />
      ))}
    </>
  )
}
