import React from 'react'

export const Content = (props) => {
  return (
    <div className='place-content'> 
        <section className='cards'>
            <img className='place-photo' src={props.photo} alt="Place Photo" />
                <div className='cards-content'>
                   <div className='location'>
                        <h5 className='place-location'><i class="fa-solid fa-location-dot"></i>{props.location}</h5>
                        <h6 className='place-map'><a href={props.map} target="_blank">View on Google Maps</a></h6>
                   </div>
                    <h1 className='place-name'>{props.name}</h1>
                    <h6 className='place-date'>
                        {props.begin} - {props.end}</h6>
                    <p className='place-desc'>{props.desc}</p>
                </div>
        </section>
    </div>
  )
}
