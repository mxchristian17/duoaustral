import React from 'react'

const Contact = () => {

    const style = {
        'backgroundColor' : 'rgb(220, 215, 180)',
    }

  return (
    <div className="w-100 p-lg-4" style={style} id="contacto">
        <div className="row p-2 py-4 my-4">
            <div className="col">
                <h5 style={{'fontWeight' : '600'}}>Contactanos</h5>
            </div>
        </div>
    </div>
  )
}

export default Contact