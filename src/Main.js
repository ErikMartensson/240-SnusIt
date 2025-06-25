import { Component } from 'react'
import styled from 'styled-components'
import Gallery from './Gallery'
import logo from './_images/240-logo.svg'
import instagramIcon from './_images/instagram-ico.svg'

const Wrapper = styled.div`
	width: 900px;
	margin: 0 auto 4em;

	@media (max-width: 768px) {
		width: 100%;
	}
`

const Header = styled.header`
	overflow: auto;
	text-align: center;
`

const Logo = styled.img`
	margin: 1em auto 0;
	width: 60%;

	@media (max-width: 768px) {
		width: 70%;
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
					<Logo
						src={logo}
						alt="240 Snus It"
					/>
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
					Skicka in dina bilder via Instagram DM för att synas här!
				</TextBox>
			</Wrapper>
		)
	}
}

export default Main
