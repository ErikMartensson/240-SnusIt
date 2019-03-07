import React, { Component } from 'react'
import styled from 'styled-components/macro'
import Gallery from './Gallery'

const Wrapper = styled.div`
	width: 660px;
	margin: 0 auto 4em;

	@media (max-width: 768px) {
		width: 100%;
	}
`

const Header = styled.header`
	overflow: auto;
`

const Title = styled.h1`
	font-family: "PT Serif Caption";
	font-weight: 400;
	font-size: 6.6rem;
	text-align: center;
	color: white;
	text-shadow: 2px 2px 5px #383838;
	font-weight: 400;
	margin: .2em auto;

	@media (max-width: 768px) {
		margin: .3em auto;
		font-size: 4rem;
	}
	@media (max-width: 375px) {
		font-size: 3.4rem;
	}
	@media (max-width: 320px) {
		font-size: 3rem;
	}
`

const TextBox = styled.div`
	background: rgba(0, 0, 0, .8);
	padding: .6em;
	color: white;
	font-size: 1.6rem;
	margin: 0 2em .4em;
	border-radius: 2px;

	&:last-child {
		margin-bottom: 0;
	}

	@media (max-width: 768px) {
		margin: 0 .6em .4em;
	}
`

class Main extends Component {
	render() {
		return (
			<Wrapper>
				<Header>
					<Title>240 Snus it!</Title>
				</Header>
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
