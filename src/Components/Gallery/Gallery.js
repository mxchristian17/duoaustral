import React from 'react'
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

const Gallery = () => {

    const properties = {
        duration: 3000,
        transitionDuration: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        indicators: true,
        responsive: [{ breakpoint: 1024, settings: { slidesToShow: 3.3, slidesToScroll: 1 }}]
    };

    const images = [
      './Images/Slides/slide-1.jpg',
      './Images/Slides/slide-2.jpg',
      './Images/Slides/slide-3.jpg',
      './Images/Slides/slide-4.jpg',
      './Images/Slides/slide-5.jpg',
      './Images/Slides/slide-6.jpg',
      './Images/Slides/slide-7.jpg',
      './Images/Slides/slide-8.jpg',
      './Images/Slides/slide-9.jpg',
      './Images/Slides/slide-10.jpg',
      './Images/Slides/slide-11.jpg',
      './Images/Slides/slide-12.jpg',
      './Images/Slides/slide-13.jpg',
      './Images/Slides/slide-14.jpg',
      './Images/Slides/slide-15.jpg',
      './Images/Slides/slide-16.jpg',
      './Images/Slides/slide-17.jpg',
      './Images/Slides/slide-18.jpg'
    ];

    const pictureStyle = {
      'objectFit': 'none',
      'objectPosition': 'top',
      'height': '100%',
      'width' : 'auto',
      'marginBottom': '1rem'
    }

  return (
    <div className="w-100 mt-lg-4 p-lg-3 bg-white" id="galeria-de-fotos">
        <div className="row p-2 py-4 my-4">
            <div className="col">
                <h5 style={{'fontWeight' : '600'}}>Galería de Fotos</h5>
            </div>
        </div>
        <Slide {...properties}>
          { images.map((each, index) => <img key={index} alt={"slide" + index} className="ps-1 pe-lg-1 img-fluid" style={pictureStyle} src={each} />) }
        </Slide>
    </div>
  )
}

export default Gallery