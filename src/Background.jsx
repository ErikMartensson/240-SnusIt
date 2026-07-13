import { useEffect, useState } from 'react'
import styled from 'styled-components'
import shuffle from './shuffle'

const IMAGE_NUMBERS = [6, 7, 8, 9, 10, 11, 12, 13]
const order = shuffle(IMAGE_NUMBERS).map((n) => `/static/img/bg${n}.webp`)

// Start fetching the first background before styled-components has
// injected any CSS that references it.
const preload = document.createElement('link')
preload.rel = 'preload'
preload.as = 'image'
preload.href = order[0]
document.head.appendChild(preload)

const CHANGE_INTERVAL = 20000

const Layer = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)),
    url(${(props) => props.$src}) no-repeat center / cover;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transition: opacity 2.5s ease;
`

function Background() {
  const [state, setState] = useState({ front: 0, srcs: [order[0], order[0]] })

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let position = 0
    const timer = setInterval(() => {
      position = (position + 1) % order.length
      const nextSrc = order[position]
      const image = new Image()
      image.onload = () => {
        setState((current) => {
          const back = current.front === 0 ? 1 : 0
          const srcs = [...current.srcs]
          srcs[back] = nextSrc
          return { front: back, srcs }
        })
      }
      image.src = nextSrc
    }, CHANGE_INTERVAL)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <Layer $src={state.srcs[0]} $visible={state.front === 0} />
      <Layer $src={state.srcs[1]} $visible={state.front === 1} />
    </>
  )
}

export default Background
