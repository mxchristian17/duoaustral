import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube'

const Video = (props) => {
    
    const [ videoTitleVisible, setVideoTitleVisible ] = useState(true)
    const [ videoTitleShowing, setVideoTitleShowing ] = useState(0)
    const [ volume, setVolume ] = useState(1)
    const { muted, setMuted } = props
    

    const videoTitleShowInterval = 1000
    
    const style = {
        'backgroundColor' : 'rgb(220,215,180)',
        'height' : '100vh'
    }
    const videoWrapper = {
        'position' : 'relative',
        'paddingBottom': '56.25%',
        'height' : '0'
    }
    const iframeStyle = {
        'position' : 'absolute',
        'top' : '0',
        'left' : '0',
        'width' : '100%',
        'height' : '100%'
    }

    const videoTitle = {
        'position' : 'relative',
        'top' : '-23vw',
        'left' : '-8vw',
        'fontSize' : '8em',
        'color' : 'white',
        'fontFamily' : 'anton,sans-serif',
        'textAlign' : 'left',
        'lineHeight' : '1em',
        'maxHeight' : '0',
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

    

  return <div className="w-100 pt-4" style={style}>
      <div className="row justify-content-center w-100 m-0">
        <div className="col col-md-10 col-lg-8 p-0">
{/*}
            <div style={videoWrapper}>
                <iframe onMouseEnter={() => setVideoTitleVisible(false)} onMouseLeave={videoTitleShow} style={iframeStyle} src="https://www.youtube.com/embed/wP2FoDP7yfo?autoplay=1&mute=1&loop=1&controls=2&playlist=wP2FoDP7yfo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
*/}
            <div className="ratio video-ratio">
                {//<iframe onMouseEnter={() => setVideoTitleVisible(false)} onMouseLeave={videoTitleShow} src="https://www.youtube.com/embed/wP2FoDP7yfo?autoplay=1&mute=1&loop=1&controls=2&playlist=wP2FoDP7yfo" title="Dúo Austral" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                }
                <ReactPlayer
                    onMouseEnter={() => setVideoTitleVisible(false)}
                    onMouseLeave={videoTitleShow}
                    url='https://www.youtube.com/embed/wP2FoDP7yfo'
                    muted={muted}
                    loop={true}
                    volume={volume}
                    playing={true}
                    config={{
                        youtube: {
                            playerVars: { showinfo: 1 }
                        }
                    }} />
            </div>
            <div style={videoTitle}>DÚO<br />AUSTRAL</div>
            <div className="h3 w-100 text-end p-4 m-0">Una nueva forma de<br />disfrutar la música</div>
            <div className="position-fixed start-0 bottom-0">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <input type="range" onChange={(e) => setVolume(e.target.value)} className="form-range" min="0" max="1" step="0.01" id="setVolume"></input>
                    </div>
                    <div className="col-3">
                        <button onClick={() => {setMuted(!muted)}} >M</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>;
};

export default Video;
