// import React from 'react'
const Cards = (props) => {
  return (
    <div className="cardContainer h-fit w-screen bg-white mt-[3vh]">
        <div className="bg-white flex items-center gap-[2vh] mb-[3vh] px-[3vh]"><div className="h-[2vh] w-[2vh] rounded-full bg-black"></div><h2 className=" bg-white text-[2.3vh] font-semibold">{props.imageName}</h2></div>
    <div className="imageSection bg-white px-[2vh]">
       <img className="bg-transparent w-[47.5vw] rounded-2xl" src={props.imgSrc} alt="first" />
    </div>
    </div>
  )
}

export default Cards