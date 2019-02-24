import React, { Component } from 'react'
import styled from 'styled-components/macro'
import Gallery from './Gallery'

const Wrapper = styled.div`
	max-width: 600px;
	margin: 0 auto 4em;
`

const Title = styled.h1`
	font-size: 6.6rem;
	text-align: center;
	color: white;
	text-shadow: 2px 2px 5px #383838;
	font-weight: 400;
	margin: .2em auto;

	@media (max-width: 768px) {
		font-size: 4.6rem;
	}
	@media (max-width: 375px) {
		font-size: 4rem;
	}
	@media (max-width: 320px) {
		font-size: 3.6rem;
	}
`

const TextBox = styled.div`
	background: rgba(0, 0, 0, .6);
	padding: .6em;
	color: white;
	font-size: 1.6rem;
	margin-bottom: .4em;

	&:last-child {
		margin: 0;
	}
`

class Main extends Component {
	render() {
		return (
			<Wrapper>
				<header>
					<Title>240 Snus it!</Title>
				</header>
				<Gallery/>
				<TextBox>
					Har du en schysst 240 eller en söt snusselfie?
				</TextBox>
				<TextBox>
					Skicka in dina bilder till <a href="mailto:prillan@240snusit.se">prillan@240snusit.se</a> för att synas här!
				</TextBox>
			</Wrapper>
		)
	}
}

export default Main
