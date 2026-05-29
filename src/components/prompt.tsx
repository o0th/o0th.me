import { useState, useEffect } from "react"
import { Cursor } from "./cursor"

interface Properties {
  onDone?: () => void
  onClear?: () => void
}

export function Prompt({ onDone, onClear }: Properties) {
  const prompt = "o0th@me:~ $ "
  const [input, setInput] = useState("")
  const [enter, setEnter] = useState(false)
  const [result, setResult] = useState("")

  useEffect(() => {
    if (enter) return

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Backspace") {
        setInput((prevInput) => prevInput.slice(0, -1))
        return
      }

      if (event.key === "Enter") {
        if (input.trim() === "clear") {
          onClear?.()
          return
        }

        setEnter(true)
        setResult(`You entered: ${input}`)
        onDone?.()
        return
      }

      setInput((prevInput) => prevInput + event.key)
    }

    document.addEventListener("keydown", handleKeydown)
    return () => document.removeEventListener("keydown", handleKeydown)
  }, [enter, input, onDone, onClear])

  return (<>
    <p>{prompt}{input}{!enter && <Cursor />}</p>
    {enter && <p>{result}</p>}
  </>)
}
