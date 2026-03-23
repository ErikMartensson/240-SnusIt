import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const Button = styled.button`
	position: fixed;
	left: .2rem;
	bottom: .2rem;
	font-size: 2.6rem;
	background: none;
	border: none;
	padding: 0;
	cursor: pointer;
`

function PlayButton() {
	const [isPlaying, setIsPlaying] = useState(false)
	const [error, setError] = useState(false)
	const audioRef = useRef(null)

	useEffect(() => {
		const audio = new Audio('static/audio/classic.ogg')
		audio.addEventListener('error', () => setError(true))
		audioRef.current = audio
		return () => {
			audio.pause()
			audio.removeEventListener('error', () => setError(true))
		}
	}, [])

	const playPause = () => {
		const audio = audioRef.current
		if (!audio || error) return

		if (isPlaying) {
			audio.pause()
			setIsPlaying(false)
		} else {
			audio.play().then(() => {
				setIsPlaying(true)
			}).catch(() => {
				setError(true)
			})
		}
	}

	if (error) return null

	return (
		<Button onClick={playPause} aria-label={isPlaying ? 'Pausa musik' : 'Spela musik'}>
			{isPlaying ? '⏸️' : '▶️'}
		</Button>
	)
}

export default PlayButton
