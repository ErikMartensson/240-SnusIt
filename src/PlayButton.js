import React, { Component } from 'react';
import styled from 'styled-components/macro'

const Button = styled.div`
	position: fixed;
	left: .2rem;
	bottom: .2rem;
	font-size: 2.6rem;
`

class PlayButton extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isPlaying : false,
		}
		this.audio = new Audio('static/audio/classic.ogg')
	}

	render() {
		const isPlaying = this.state.isPlaying
		return (
			<Button onClick={this.playPause}>
				{isPlaying ? '⏸️' : '▶️'}
			</Button>
		);
	}

	playPause = () => {
		const isPlaying = !this.state.isPlaying

		if (isPlaying) {
			this.audio.play()
		} else {
			this.audio.pause()
		}

		this.setState({
			isPlaying,
		})
	}
}

export default PlayButton
