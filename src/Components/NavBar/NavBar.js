import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import $ from 'jquery';

const NavBar = () => {
    const style={
        'backgroundColor' : 'rgb(220,215,180)'
    }
    const brandStyle = {'fontFamily' : 'Poppins, sans-serif', 'fontSize' : '1.6em'}

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").removeClass('show');
    });

  return <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={style}>
        <div className="container-fluid p-4">
            <a className="navbar-brand fw-bold" style={brandStyle} href="#/">Dúo Austral</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link"aria-current="page"  to="/#" scroll={el => scrollWithOffset(el)}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#sobre-nosotros" scroll={el => scrollWithOffset(el)}>Sobre Nosotros</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#servicios" scroll={el => scrollWithOffset(el)}>Servicios</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#galeria-de-fotos" scroll={el => scrollWithOffset(el)}>Galería de Fotos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#mensajes" scroll={el => scrollWithOffset(el)}>Mensajes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#contacto" scroll={el => scrollWithOffset(el)}>Contacto</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>;
};

export default NavBar;
