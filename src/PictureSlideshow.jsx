import './PictureSlideshow.css'
import { useState } from 'react';

export default function PictureSlideshow({pictures}) {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0)


  const picture = pictures[currentPictureIndex]
  

  return (

    <div>
      <button  onClick={() => setCurrentPictureIndex((Math.abs((currentPictureIndex - 1)) % pictures.length))}>

        {'<'}
        </button>
      <img 
        className="slideshow-image"
        src={picture.imageUrl} 
        alt={picture.description} />
      <button 
        onClick={() => setCurrentPictureIndex((currentPictureIndex + 1) % pictures.length)}>
          {'>'}
          </button>
      <div className="details">
        <span>{picture.description}</span>
        <span>1 of 3</span>
      </div>
    </div>




  );
}
