import React from 'react'

export default function Movie({name, year, poster}) {
  return (
    <div className='movie'>
        <img src={poster} alt="" />
        <h3>{name}</h3>
        <p>{year}</p>
    </div>
  )
}
