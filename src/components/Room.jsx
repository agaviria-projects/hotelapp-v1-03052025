import React from 'react'

export default function Room({dataRoom}) {
    console.log(dataRoom);
    //destructuring
    let {name, price, type, image, size} = dataRoom;
  return (
    <>
        <div class="w3-third w3-margin-bottom">
            <img src={image} alt="Norway" style={{"width":"100%"}} />
            <div class="w3-container w3-white">
                <h3>{name}</h3>
                <h6 class="w3-opacity">From ${price}usd</h6>
                <p>{type}</p>
                <p>{size}</p>
                <p class="w3-large"><i class="fa fa-bath"></i> <i class="fa fa-phone"></i> <i class="fa fa-wifi"></i></p>
                <button class="w3-button w3-block w3-black w3-margin-bottom">Choose Room</button>
            </div>
        </div>
    </>
  )
}
