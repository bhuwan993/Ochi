// import React from 'react'
import './Navbar.css'
function Navbar(){
   
    return (
       <>
        <div className="navContainer flex justify-between px-[8vh] z-[999] py-[2vh] items-center relative">
            <div>
                <h1 className="text-white text-[4vh] font-bold">Ochi</h1>
            </div>
            <div className="flex gap-[4vh] relative left-[27vh]">
                <a className='text-[2.5vh] font-extralight text-white flex flex-col items-center justify-center gap-[0.01vh]' id='nav1' href="#"><h2>Services</h2><div className='w-[0vh] bg-white h-[0.2vh]'></div></a>
                <a className='text-[2.5vh] font-extralight text-white flex flex-col items-center justify-center gap-[0.01vh]' id='nav2' href="#"><h2>Our Work</h2><div className='w-[0vh] bg-white h-[0.2vh]'></div></a>
                <a className='text-[2.5vh] font-extralight text-white flex flex-col items-center justify-center gap-[0.01vh]' id='nav3' href="#"><h2>About us</h2><div className='w-[0vh] bg-white h-[0.2vh]'></div></a>
                <a className='text-[2.5vh] font-extralight text-white flex flex-col items-center justify-center gap-[0.01vh]' id='nav4' href="#"><h2>Insights</h2><div className='w-[0vh] bg-white h-[0.2vh]'></div></a>

            </div>
                <button className="text-[2.5vh] font-light text-white flex flex-col justify-center items-center" id='btn'><h2>Contact us</h2> <div className='w-[0vh] bg-white h-[0.2vh]'></div></button>
            
            
        
        </div>
         <div className="navContainer flex justify-between px-[8vh] bg-transparent -top-[6vh] py-[2vh] items-center relative">
         <div>
             <h1 className="text-white text-[4vh] font-bold hidden">Ochi</h1>
         </div>
         <div className="flex gap-[4vh] relative left-[31.1vh]">
             <a className='text1 text-[2.5vh] font-extralight text-white hidden' href="#">Services</a>
             <a className='text1 text-[2.5vh] font-extralight text-white hidden' href="#">Our Work</a>
             <a className='text1 text-[2.5vh] font-extralight text-white hidden' href="#">About us</a>
             <a className='text1 text-[2.5vh] font-extralight text-white hidden' href="#">Insights</a>
         </div>
             <button className="text-[2.5vh] font-light text-white">Contact us</button>
         
         
     
     </div>
     </>
    )
}
export default Navbar;