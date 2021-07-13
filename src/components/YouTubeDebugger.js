// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }
    handleBitrate = () => {
        this.setState(previousState => {
            return {
                ...previousState,
                settings: {
                    ...previousState.settings,
                    bitrate: 12
                }
            }
        }, () => { console.log(this.state) })
    }

    handleRes = () => {
        this.setState(previousState => {
            return {
                ...previousState,
                settings: {
                    ...previousState.settings,
                    video: {
                        ...previousState.settings.video,
                        resolution: "720p"
                    }
                }
            }
        }, () => { console.log(this.state) })
    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitrate}>Bitrate</button>
                <button className="resolution" onClick={this.handleRes}>Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger