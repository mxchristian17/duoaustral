import React from 'react'

const Services = () => {

    const manropeFont = {'fontFamily' : "'Manrope', sans-serif"}

    const style = {
        'backgroundColor' : 'rgb(220, 215, 180)',
    }

  return (
    <div className="w-100 mt-lg-4" style={style} id="servicios">
        <div className="container p-4">
            <div className="row p-2">
                <div className="col">
                    <h5 style={{'fontWeight' : '600'}}>Nuestros Servicios</h5>
                </div>
            </div>
            <div className="row p-2">
                <div className="col-12 col-lg">
                    <img src="/Images/Services/wedding-rings.png" width="80" alt="weddings" />
                    <h4 className="pb-3" style={{'fontWeight' : '600'}}>Ceremonia de casamiento</h4>
                    <p style={manropeFont} className="text-center lh-lg fw-light">Una selección de obras musicales especialmente curada para acompañar uno de los momentos más importantes de nuestras vidas. También podemos incluir “esa canción especial” que los une.</p>
                </div>
                <div className="col-12 col-lg">
                    <img src="/Images/Services/cocktail-toast.png" width="80" alt="cocktails" />
                    <h4 className="pb-3" style={{'fontWeight' : '600'}}>Cocktail - Recepción</h4>
                    <p style={manropeFont} className="text-center lh-lg fw-light">Música especialmente seleccionada para amenizar el momento social, de diversos estilos, desde los clásicos a lo moderno.</p>
                </div>
                <div className="col-12 col-lg">
                    <img src="/Images/Services/private-events.png" width="80" alt="events" />
                    <h4 className="pb-3" style={{'fontWeight' : '600'}}>Eventos privados</h4>
                    <p style={manropeFont} className="text-center lh-lg fw-light">Adaptamos nuestro servicio musical a tus necesidades. Creamos experiencias musicales que acompañan y realzan el evento. Podemos musicalizar desde diferentes estilos, incluso interpretar música institucional o compuesta especialmente para dicho acontecimiento.</p>
                </div>
                <div className="col-12 col-lg">
                    <img src="/Images/Services/private-concerts.png" width="80" alt="concerts" />
                    <h4 className="pb-3" style={{'fontWeight' : '600'}}>Concierto íntimo de música clásica</h4>
                    <p style={manropeFont} className="text-center lh-lg fw-light">Concierto exclusivo de obras compuestas por los más grandes compositores de la música clásica para dúo de violín y viola.</p>
                </div>
                <div className="col-12 col-lg">
                    <img src="/Images/Services/more-services.png" width="80" alt="moreServices" />
                    <h4 className="pb-3" style={{'fontWeight' : '600'}}>Más Servicios</h4>
                    <p style={manropeFont} className="text-center lh-lg fw-light">Conciertos de trío, cuarteto y/o ensamble de cuerdas. Consultanos desde la sección de Contacto.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services