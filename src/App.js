import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components/macro'
import Main from './Main'
import PlayButton from './PlayButton'

const GlobalStyle = createGlobalStyle`
	html {
		height: 100vh;
	}
	body {
		font-family: "Source Sans Pro";
		font-weight: 300;
		background:
			linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, 0)),
			url(/static/img/bg${props => props.img}.jpg) no-repeat center;
		background-size: cover;
		background-attachment: fixed;
	}
	a {
		color: #68baff;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
`

class App extends Component {
	render() {
		const bgImages = [1, 2, 3, 4, 5]
		const rand = bgImages[Math.random() * bgImages.length >> 0]
		return (
			<React.Fragment>
				<GlobalStyle img={rand} />
				<Main/>
				<PlayButton/>
			</React.Fragment>
		)
	}
}

export default App
