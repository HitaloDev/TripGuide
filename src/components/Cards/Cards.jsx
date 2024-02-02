import './cards.css';
import { data } from '../../data.jsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Cards() {
  return (
    <>
      <div className="cards">
      {data.map((item) => (
        <Link to={`/rooms/${item.id}`} className='link' key={item.id}>
            <div className='card' key={item.id}>
              <img 
              src={item.images[0]}          
              className='card-img'/>
              <h3 className='card-cidade'>{item.city}</h3>
              <p className='card-pais'>{item.country}</p>
              <p className='card-data'>{item.startDate} - {item.endDate}</p>
            </div>
        </Link>
        ))}
      </div>
    </>
  )
}

export default Cards