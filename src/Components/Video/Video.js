import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeMute, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'


const Video = (props) => {
    
    const [ videoTitleVisible, setVideoTitleVisible ] = useState(true)
    const [ videoTitleShowing, setVideoTitleShowing ] = useState(0)
    const [ volume, setVolume ] = useState(1)
    const [ loading, setLoading ] = useState(true)
    const { muted, setMuted, muteToggle } = props
    

    const videoTitleShowInterval = 1000
    
    const style = {
        'backgroundColor' : 'rgb(220,215,180)'
    }

    const videoTitle = {
        'fontSize' : '10vw',
        'color' : 'white',
        'fontFamily' : 'anton,sans-serif',
        'textAlign' : 'left',
        'lineHeight' : '1em',
        'display' : videoTitleVisible ? 'block' : 'none',
        'opacity' : videoTitleShowing ? '0' : '1',
        'transition' : 'opacity 1s'
    }

    const videoTitleShow = () => {

        setVideoTitleVisible(true)
        setVideoTitleShowing(true)
        setTimeout(() => {
            setVideoTitleShowing(false)
        }, videoTitleShowInterval)
        
    }

    const updateVolume = (e) => {
        parseFloat(e.target.value) === 0 ? setMuted(true) : setMuted(false)
        setVolume(e.target.value)
    }

    const muteIcon = muted ? <FontAwesomeIcon icon={faVolumeMute} /> : <FontAwesomeIcon icon={faVolumeHigh} />

  return <div className="w-100 pt-4" style={style}>
            <div className="row justify-content-center m-0 p-0">
                <div className="position-relative col col-md-10 col-lg-8 p-0 m-0">
                    <div className="ratio ratio-16x9">
                        <ReactPlayer
                            onMouseEnter={() => setVideoTitleVisible(false)}
                            onMouseLeave={videoTitleShow}
                            url='https://www.youtube.com/embed/wP2FoDP7yfo'
                            muted={muted}
                            loop={true}
                            volume={parseFloat(volume)}
                            playing={!loading}
                            width={'100%'}
                            height={'100%'}
                            onReady={() => {setLoading(false)}}
                            config={{
                                youtube: {
                                    playerVars: {
                                        showinfo: 0,
                                        controls: 0,
                                        rel: 0,
                                        start: 0,
                                        enablejsapi: 0,
                                        origin: window.location.origin
                                    }
                                }
                            }} />
                    </div>
                    {loading ? 'loading' : window.location.origin}
                    <div className="position-absolute bottom-0 start-0 h-75">
                        <div className="row m-0 p-0 d-flex align-items-center">
                            <div className="col col-md-10 col-lg-10">
                                <div style={videoTitle}>DÚO<br />AUSTRAL</div>
                            </div>
                        </div>
                    </div>
                    <div className="h3 w-100 text-end p-4 m-0">Una nueva forma de<br />disfrutar la música</div>
                    <div style={{'zIndex' : '2'}} className="position-fixed start-0 bottom-0">
                        <div className="row d-flex align-items-center p-2 m-0">
                            <div className="col-2 p-0 m-0"></div>
                            <div className="col-8 p-1 m-0">
                                <input type="range" value={volume} onChange={updateVolume} className="form-range pt-1" min="0" max="1" step="0.01" id="setVolume"></input>
                            </div>
                            <div className="col-2 p-0 m-0">
                                <button className="btn" onClick={muteToggle}>{muteIcon}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
};

export default Video;
