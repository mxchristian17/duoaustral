import React from 'react';

const AboutUs = () => {

    const poppinsFont = {'fontFamily' : 'Poppins, sans-serif'}
    const style = {
        'backgroundColor' : 'rgb(255,255,255)',
        'height' : '100vh'
    }

  return <div className="w-100" style={style} id="sobre-nosotros">
      <div className="container p-4">
        <div className="row p-4" style={poppinsFont}>
            <div className="col col-md-6 p-4 text-start">
                <h5 className="pb-3">Sobre nosotros</h5>
                <h2>Dúo Austral</h2>
            </div>
            <div className="col col-md-6 p-4 text-start lh-lg">
                <p>Somos Rodrigo y Nacho, un dúo de violín y viola radicado en Barcelona. Nos apasiona la música en todos sus géneros, desde la popular a la académica. Nuestro origen latinoamericano nos nutrió de sus hermosos estilos musicales, como el tan amado Tango que siempre incluimos en nuestro repertorio. Nos divierte adaptar la música de artistas actuales a nuestros instrumentos, y así transformarla en un nueva forma de oírla.</p>
            </div>
        </div>
      </div>
  </div>;
};

export default AboutUs;
