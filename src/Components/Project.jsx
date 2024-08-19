// import React from 'react'

import Button from "../Button"
import Cards from "./Cards"

const projects = () => {
    
  return (
    <div className="project bg-white">
      <div className="tittle px-[4vh] bg-white">
        <h1 className='bg-white text-[10vh] pt-[3vh]'>Featured Projects</h1>
      </div>
      <hr  className="mt-[3vh] border-black"/>

    <div className="projectContainer grid grid-cols-2 py-[3vh] bg-white">
     <div className="bg-white">
     <Cards imageName={"FYDE"} imgSrc={"https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"} />
      <div className="flex  gap-[2vh] bg-white pt-[4vh] pl-[3vh]">
      <Button text={'AUDIT'} />
      <Button text={'COPYWRITING'} />
      <Button text={'SALES DECK'} />
      <Button text={'SLIDES DESIGN'} />
      </div>
     </div>
     <div className="bg-white">
     <Cards imageName={"VISE"} imgSrc={"https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"} />
     <div className="flex  gap-[2vh] bg-white pt-[4vh] pl-[3vh]">
      <Button text={'AGENCY'} />
      <Button text={'COMPANY PRESENTATION'} />
      </div>
     </div>
     <div className="bg-white">
     <Cards imageName={"AH2 & MATT HORN"} imgSrc={"https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"} />
     <div className="flex  gap-[2vh] bg-white pt-[4vh] pl-[3vh]">
      <Button text={'PITCH DECK'} />
      </div>
     </div>
     <div className="bg-white">
     <Cards imageName={"TRAWA"} imgSrc={"https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"} />
     <div className="flex  gap-[2vh] bg-white pt-[4vh] pl-[3vh]">
      <Button text={'BRAND IDENTITY'} />
      <Button text={'DESIGN RESEARCH'} />
      <Button text={'INVESTOR DECK'} />
      </div>
     </div>
     <div className="bg-white">
     <Cards imageName={"PREMIUM BLEND"} imgSrc={"https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"} />
     <div className="flex  gap-[2vh] bg-white pt-[4vh] pl-[3vh]">
      <Button text={'BRANDED TEMPLATE'} />
       
      </div>
     </div>
     
    </div>
     <button className='px-[2.5vh] py-[2vh] flex justify-center items-center border-none rounded-[28px] relative left-[40%] bg-black gap-[3vh] -top-[3vh]'><h1 className="text-white font-medium text-[2.5vh] tracking-tighter ">VIEW ALL CASE STUDIES </h1><div className="h-[2vh] w-[2vh] rounded-full bg-white"></div></button>
    </div>
)
}

export default projects