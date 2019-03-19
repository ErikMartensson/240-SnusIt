import React, { Component } from 'react'
import styled from 'styled-components/macro'
import Gallery from './Gallery'
import instagramIcon from './_images/instagram-ico.svg'

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

const TextBoxFlex = styled(TextBox)`
	display: flex;
`

const InstagramIcon = styled.img`
	margin-right: .6em;
`

class Main extends Component {
	render() {
		return (
			<Wrapper>
				<Header>
					<Title>240 Snus it!</Title>
				</Header>
				<Gallery/>
				<TextBoxFlex>
					<InstagramIcon
						src={instagramIcon}
						width={33}
						height={33}
						alt="Insta"
					/>
					<div>
						Följ oss på Instagram&nbsp;
						<a
							href="https://www.instagram.com/240snusit.se/"
							target="_blank"
							rel="noopener noreferrer"
						>
							@240snusit.se
						</a>
					</div>
				</TextBoxFlex>
				<TextBox>
					Skicka in dina bilder till <a href="mailto:prillan@240snusit.se">prillan@240snusit.se</a> eller via Instagram DM för att synas här!
				</TextBox>
			</Wrapper>
		)
	}
}

export default Main
