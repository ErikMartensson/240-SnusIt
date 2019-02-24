import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components/macro'
import Main from './Main'
import PlayButton from './PlayButton'

const GlobalStyle = createGlobalStyle`
	body {
		font-family: "PT Serif";
		font-weight: 400;
		background: url(/static/img/bg${props => props.img}.jpg) no-repeat center;
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
