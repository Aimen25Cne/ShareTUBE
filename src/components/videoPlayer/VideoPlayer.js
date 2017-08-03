// Libs & utils
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// CSS
import './VideoPlayer.css'

export default class VideoPlayer extends Component {
	static propTypes = {
		videoId: PropTypes.string.isRequired
	}

	render () {
		return (
			<div className="video-player">

			</div>
		)
	}
}