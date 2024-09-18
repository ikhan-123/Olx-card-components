import React, { useState } from 'react'


const Card = (props) => {
    return (
        <>
            <div className='card bg-base-100 w-96 shadow-xl'>
                <figure><img src={props.src} alt="Shoes" />
                </figure>
                <div className='card-body'>
                    <h2 className='card-title'>{props.title}</h2>
                    <p>{props.description} </p>
                    <div className='card-actions justify-end'>
                        <button className='btn btn-primary'>Buy Now</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Card