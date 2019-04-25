import React, { Component } from 'react'
import styled from 'styled-components/macro'
import ImageGallery from 'react-image-gallery'
import images from './fans.json'
import './image-gallery.css'

const GalleryContainer = styled.div`
	margin: 1em auto 3em;

	.image-gallery {
		margin: auto;
		padding: 0 .6em;
		max-width: 400px;

		@media (max-width: 420px) {
			padding: 0 2em;
		}
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
		background: rgba(0, 0, 0, 0.8);
		font-size: 1.1em;
	}

	.image-gallery-bullets {
		width: 100%;
		bottom: -1.6em;
		margin: 0;
	}
`;

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
