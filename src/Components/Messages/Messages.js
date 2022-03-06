import React from 'react'
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

const Messages = () => {

    const manropeFont = {'fontFamily' : "'Manrope', sans-serif", 'letterSpacing' : '0.5rem'}

    const properties = {
        duration: 3000,
        transitionDuration: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        indicators: true,
        responsive: [{ breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 }}]
    };

    const images = [
        ['CHRIS & DELFI', "“Ha sido un placer para nosotros poder escucharlos. Sentir su música en vivo nos ha hecho emocionar hasta la fibra más intima”"],
        ['MARCE', "“Excelente calidad musical. Soy entendida en la materia y les doy un 10!”"],
        ['CAMI & PABLO', "“Sin dudas lo mejor de nuestra boda fue el Duo Austral. Todos los invitados nos han felicitado por su concierto.”"]
      ];

  return (
    <div className="w-100 mt-lg-4 p-lg-3 bg-black text-white" id="mensajes">
        <div className="row p-2 py-4 my-4">
            <div className="col">
                <h5 style={{'fontWeight' : '600'}}>Mensajes que nos llegan</h5>
            </div>
        </div>
        <Slide {...properties}>
          { images.map((each, index) => <div key={index} className="text-center"><div style={{'fontWeight' : '700'}} className='col col-lg-6 pb-4 px-3 lh-lg h5 m-auto'>{each[1]}</div><div style={manropeFont} className="text-center lh-lg fw-light">{each[0]}</div></div>) }
        </Slide>
    </div>
  )
}

export default Messages