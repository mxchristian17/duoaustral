import React, { useState } from 'react';

const Video = () => {

    const [ videoTitleVisible, setVideoTitleVisible ] = useState(true)
    
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
        'display' : videoTitleVisible ? 'block' : 'none'
    }

  return <div className="w-100" style={style}>
      <div className="row justify-content-center w-100">
        <div className="col col-md-10 col-lg-8">
            <div style={videoWrapper}>
                <iframe onMouseEnter={() => setVideoTitleVisible(false)} onMouseLeave={() => setVideoTitleVisible(true)} style={iframeStyle} src="https://www.youtube.com/embed/wP2FoDP7yfo?autoplay=1&mute=1&loop=1&controls=2&playlist=wP2FoDP7yfo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div style={videoTitle}>DÚO<br />AUSTRAL</div>
            <div className="h3 w-100 text-end p-4 m-0">Una nueva forma de<br />disfrutar la música</div>
        </div>
      </div>
  </div>;
};

export default Video;
