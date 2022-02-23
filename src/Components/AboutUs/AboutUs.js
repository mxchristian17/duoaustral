import React from 'react';

const AboutUs = () => {

    const poppinsFont = {'fontFamily' : 'Poppins, sans-serif'}
    const style = {
        'backgroundColor' : 'rgb(255,255,255)'
    }
    const pictureStyle = {
        'objectFit': 'none',
        'objectPosition': 'top',
        'height': 'auto',
        'maxWidth': '100%',
        'marginBottom': '1rem'
    }

  return <div className="w-100" style={style} id="sobre-nosotros">
      <div className="container p-4">
        <div className="row p-4" style={poppinsFont}>
            <div className="col-lg-6 p-4 text-start">
                <h5 className="pb-3" style={{'fontWeight' : '600'}}>Sobre nosotros</h5>
                <h2 className="fw-bold">Dúo Austral</h2>
            </div>
            <div className="col col-lg-6 p-2 p-lg-4 text-start lh-lg fw-light">
                <p className="text-center text-lg-start">Somos Rodrigo y Nacho, un dúo de violín y viola radicado en Barcelona. Nos apasiona la música en todos sus géneros, desde la popular a la académica. Nuestro origen latinoamericano nos nutrió de sus hermosos estilos musicales, como el tan amado Tango que siempre incluimos en nuestro repertorio. Nos divierte adaptar la música de artistas actuales a nuestros instrumentos, y así transformarla en un nueva forma de oírla.</p>
            </div>
        </div>

        <div className="row p-1 m-0">
            <div className="col col-lg-4 text-center text-lg-end d-block d-lg-none">
                <h2 className="fw-bold">Rodri</h2>
            </div>
        </div>
        <div className="row py-1 px-2" style={poppinsFont}>
            <div style={{'zIndex' : '1'}} className="col-lg-7 px-0 px-lg-4 py-lg-4 d-flex flex-wrap align-items-center justify-content-center">
                <img src="../Images/foto-rodri-solo.webp" alt="Rodri" className="img-fluid" style={pictureStyle} />
            </div>
            <div className="col col-lg-4 p-2 p-lg-4 text-start lh-lg fw-light">
                <h2 className="fw-bold d-none d-lg-block pb-4">Rodri</h2>
                <p className="text-center text-lg-start">Comencé mis estudios de violín en la Municipalidad de Lo Prado en Chile, donde rápidamente integré orquestas juveniles desempeñandome como concertino. He realizado cursos de perfeccionamiento en Canadá y Argentina, nutriéndome de grandes maestros del violín. Actualmente estoy realizando el nivel superior de interpretación en música clásica en el conservatorio del Liceu de Barcelona.</p>
            </div>
            <div className="d-none d-lg-block position-absolute h-75 w-25" style={{'zIndex' : '0', 'backgroundColor' : '#EEEEEE'}}></div>
        </div>

        <div className="row p-1 m-0">
            <div className="col col-lg-4 text-center text-lg-end d-block d-lg-none">
                <h2 className="fw-bold">Nacho</h2>
            </div>
        </div>
        <div className="row py-1 px-2" style={poppinsFont}>
            <div className="col col-lg-4 p-2 p-lg-4 text-start lh-lg fw-light">
                <h2 className="fw-bold d-none d-lg-block pb-4">Nacho</h2>
                <p className="text-center text-lg-start">Soy de Buenos Aires, Argentina, ciudad donde realicé mis estudios superiores en viola y formé parte de la Orquesta Sinfónica Nacional, la Orquesta Estable del Teatro Colon y la Orquesta de Tango de Buenos Aires. Actualmente me encuentro en Barcelona realizando el master en interpretación en la ESMUC.</p>
            </div>
            <div style={{'zIndex' : '1'}} className="col-lg-7 px-0 px-lg-4 py-lg-4 d-flex flex-wrap align-items-center justify-content-center order-first order-lg-last">
                <img src="../Images/foto-nacho-solo.webp" alt="Nacho" className="img-fluid" style={pictureStyle} />
            </div>
            <div className="d-none d-lg-block position-absolute end-0 h-75 w-50 me-4" style={{'zIndex' : '0', 'backgroundColor' : '#EEEEEE'}}></div>
        </div>
      </div>
    </div>;
};

export default AboutUs;
