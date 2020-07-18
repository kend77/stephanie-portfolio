/* global window */
import { useState, useEffect } from "react"

function useWindowInnerWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const setInnerWidth = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", setInnerWidth)
    return () => {
      window.removeEventListener("resize", setInnerWidth)
    }
  }, window.innerWidth)

  return width
}

export { useWindowInnerWidth }
