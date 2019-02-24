import React, { Component } from 'react'
import styled from 'styled-components/macro'
import ImageGallery from 'react-image-gallery'
import './image-gallery.css'


const GalleryContainer = styled.div`
	margin: 1em auto 3em;

	.image-gallery {
		margin: auto;
		padding: 0 .6em;
		max-width: 400px;
	}

	.image-gallery-slides {
		max-width: 400px;
		max-height: 400px;

		box-sizing: border-box;
		overflow: hidden;
		border-radius: 50%;
	}

	.image-gallery-description {
		width: 100%;
		box-sizing: border-box;
		text-align: center;
		bottom: 2em;
	}

	.image-gallery-bullets {
		bottom: -1.6em;
	}
`;

const images = [
	{
		original: 'static/img/fans/william.jpg',
		description: 'William',
	},
	{
		original: 'static/img/fans/albin-eriksson.jpg',
		description: 'Albin Eriksson',
	},
	{
		original: 'static/img/fans/gustav-as.jpg',
		description: 'Gustav Ås',
	},
	{
		original: 'static/img/fans/martin-kaspar.jpg',
		description: 'Martin & Kaspar',
	},
	{
		original: 'static/img/fans/binorsk.jpg',
		description: 'Binorsk',
	},
	{
		original: 'static/img/fans/emil-wallen.jpg',
		description: 'Emil Wallen',
	},
	{
		original: 'static/img/fans/carl-heydl.jpg',
		description: 'Carl Heydl',
	},
	{
		original: 'static/img/fans/ville-ericsson.jpg',
		description: 'Ville Ericsson',
	},
	{
		original: 'static/img/fans/oscar-englundh.jpg',
		description: 'Oscar Englundh',
	},
	{
		original: 'static/img/fans/eddie.jpg',
		description: 'Eddie Meduza - Könsrockare',
	},
]

class Gallery extends Component {
	render() {
		return (
			<GalleryContainer>
				<ImageGallery
					items={images}
					lazyLoad={true}
					showNav={false}
					showPlayButton={false}
					showThumbnails={false}
					showFullscreenButton={false}
					showBullets={true}
					autoPlay={true}
					slideInterval={4000}
				/>
			</GalleryContainer>
		)
	}
}

export default Gallery
