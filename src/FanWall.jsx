import { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import fanData from './fans.json'
import shuffle from './shuffle'

// Shuffled once per visit so every fan gets a fair spot on the wall.
const fans = shuffle(fanData)

const Section = styled.section`
  margin: 1em 2em 2.5em;

  @media (max-width: 768px) {
    margin: 1em 0.6em 2.5em;
  }
`

const Grid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 1.4em 0.8em;
  margin: 0;
  padding: 0;
`

const FanButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  width: 100%;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font: inherit;

  img {
    display: block;
    width: 100%;
    max-width: 120px;
    aspect-ratio: 1;
    object-fit: cover;
    box-sizing: border-box;
    border: 4px solid rgba(0, 0, 0, 0.8);
    border-radius: 50%;
    background: #222;
  }

  span {
    font-family: 'PT Serif Caption', serif;
    font-size: 0.9em;
    color: white;
    text-align: center;
    background: rgba(0, 0, 0, 0.8);
    padding: 0.15em 0.7em;
    border-radius: 1em;
    overflow-wrap: anywhere;
  }

  @media (prefers-reduced-motion: no-preference) {
    img {
      transition: transform 0.15s ease;
    }

    &:hover img,
    &:focus-visible img {
      transform: scale(1.07);
    }
  }
`

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  background: rgba(0, 0, 0, 0.85);
`

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8em;
  margin: 0;
`

const Portrait = styled.img`
  width: min(70vmin, 420px);
  aspect-ratio: 1;
  object-fit: cover;
  box-sizing: border-box;
  border: 8px solid rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  background: #222;
`

const Caption = styled.figcaption`
  font-family: 'PT Serif Caption', serif;
  font-size: 1.3em;
  color: white;
  text-align: center;
`

const Counter = styled.div`
  font-size: 0.9em;
  color: rgba(255, 255, 255, 0.7);
`

const RoundButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  svg {
    width: 1.3rem;
    height: 1.3rem;
    fill: currentColor;
  }

  &:hover {
    background: black;
  }
`

const CloseButton = styled(RoundButton)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`

const NavButton = styled(RoundButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.$side === 'left' ? 'left: 1rem;' : 'right: 1rem;')}
`

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
)

const ChevronLeftIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </svg>
)

const ChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
)

function Lightbox({ index, onClose, onPrev, onNext }) {
  const closeRef = useRef(null)
  const fan = fans[index]

  useEffect(() => {
    closeRef.current.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onPrev()
      if (event.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose, onPrev, onNext])

  return (
    <Overlay
      role="dialog"
      aria-modal="true"
      aria-label={fan.name}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <CloseButton
        type="button"
        ref={closeRef}
        onClick={onClose}
        aria-label="Stäng"
      >
        <CloseIcon />
      </CloseButton>
      <NavButton
        type="button"
        $side="left"
        onClick={onPrev}
        aria-label="Föregående bild"
      >
        <ChevronLeftIcon />
      </NavButton>
      <NavButton
        type="button"
        $side="right"
        onClick={onNext}
        aria-label="Nästa bild"
      >
        <ChevronRightIcon />
      </NavButton>
      <Figure>
        <Portrait src={fan.image} alt={fan.name} />
        <Caption>{fan.name}</Caption>
        <Counter>
          {index + 1} / {fans.length}
        </Counter>
      </Figure>
    </Overlay>
  )
}

function FanWall() {
  const [selected, setSelected] = useState(null)

  const close = useCallback(() => setSelected(null), [])
  const previous = useCallback(
    () => setSelected((index) => (index + fans.length - 1) % fans.length),
    [],
  )
  const next = useCallback(
    () => setSelected((index) => (index + 1) % fans.length),
    [],
  )

  return (
    <Section>
      <Grid>
        {fans.map((fan, index) => (
          <li key={fan.image}>
            <FanButton type="button" onClick={() => setSelected(index)}>
              <img
                src={fan.image}
                alt={fan.name}
                loading="lazy"
                decoding="async"
              />
              <span>{fan.name}</span>
            </FanButton>
          </li>
        ))}
      </Grid>
      {selected !== null && (
        <Lightbox
          index={selected}
          onClose={close}
          onPrev={previous}
          onNext={next}
        />
      )}
    </Section>
  )
}

export default FanWall
