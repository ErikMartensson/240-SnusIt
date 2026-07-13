import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  position: fixed;
  left: 0.8rem;
  bottom: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  svg {
    width: 1.4rem;
    height: 1.4rem;
    fill: currentColor;
  }

  &:hover {
    background: black;
  }
`

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
)

const PauseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 19h4V5H6zm8-14v14h4V5z" />
  </svg>
)

function PlayButton() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [error, setError] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    return () => audioRef.current?.pause()
  }, [])

  const playPause = () => {
    if (error) return

    // Created on the first click so the song is not downloaded for
    // visitors who never press play.
    if (!audioRef.current) {
      const audio = new Audio('/static/audio/classic.ogg')
      audio.addEventListener('ended', () => setIsPlaying(false))
      audio.addEventListener('error', () => setError(true))
      audioRef.current = audio
    }

    const audio = audioRef.current
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setError(true))
    }
  }

  if (error) return null

  return (
    <Button
      onClick={playPause}
      aria-label={isPlaying ? 'Pausa musik' : 'Spela musik'}
    >
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </Button>
  )
}

export default PlayButton
