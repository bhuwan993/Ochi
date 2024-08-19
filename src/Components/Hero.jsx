import  {useEffect} from 'react'
import gsap from 'gsap'
import { FaArrowUpLong } from "react-icons/fa6";
import Ochi from '../assets/Ochi.png'
// import './Hero.css'
const Hero = () => {
  useEffect(()=>{
    let circle = document.querySelector('.arrowBtn');
    let start = document.querySelector('#start');
    let arrow = document.querySelector('.arrow')
    gsap.to('#ochi',{
      // scale:1,
      width:"23vh",
      delay:0.6,
      duration: 2,
    })
    start.addEventListener('mouseenter',function(){
      gsap.to('.circle',{
        scale:1,
       duration:0.5,
       color:"black",
       
        
      })
      gsap.to('#start',{
        backgroundColor:'white',
        color:"black",
      
      })
      arrow.style.color = "black";
      arrow.style.zIndex = 99;
    })
      start.addEventListener('mouseleave',function(){
        gsap.to('.circle',{
          scale:0,
         duration:0.5,
         color:"white"
      })
      gsap.to('#start',{
        backgroundColor:'black',
        color:"white",
      })
      arrow.style.color = "white"
    })
    circle.addEventListener('mouseenter',function(){
      gsap.to('.circle',{
        scale:1,
       duration:0.5,
        
      })
      gsap.to('#start',{
        backgroundColor:'white',
        color:"black",
        duration:0.6,
      })
      arrow.style.zIndex = 99;
      arrow.style.color = "black";
    })
     circle.addEventListener('mouseleave',()=>{
      gsap.to('.circle',{
        scale:0,
        duration:0.5,
      })
      gsap.to('#start',{
        backgroundColor:'black',
        color:"white",
        duration:0.6,
      })
       arrow.style.color = "white"
    })
    
  },[])
  return (
    <div data-scroll data-scroll-section data-scroll-speed = '-.5' className="heroContainer h-fit w-screen flex flex-col gap-[1vh] ">
        <div className="mt-[2vh] px-[8vh] pb-[5vh] pt-[10vh]">
             <h1 className=" text-white  text-[20vh] leading-[16vh] tracking-normal font-['founderGrotesk']">WE CREATE</h1>
             <div className="text-white  text-[20vh] items-center  leading-[14vh] flex gap-[2vh]"><div id='ochi' className='flex gap-[2vh]  rounded-2xl h-[14vh] relative -top-[4vh] left-[1vh] w-[0vh] mr-[1.3vh]'><img className="rounded-2xl" width={200} height={300} src={Ochi} alt="" /></div><h2 className="tracking-normal font-['founderGrotesk2']">EYE OPENING</h2></div>
             <h1 className=" text-white  text-[20vh] leading-[16vh] font-['founderGrotesk2'] tracking-normal">PRESENTATIONS</h1>
        </div>
        <hr className="opacity-[0.4]"/>
        <div className="flex justify-between px-[8vh] mt-[2vh]">
          <h4 className="text-white font-medium">For public prievte companies</h4>
          <h4 className="text-white font-medium">From the first pitch to IPO</h4>
          <div className="flex items-center gap-[0.4vh] justify-center ">
          <h4 id='start' className="text-white cursor-pointer font-medium border-2 px-[2vh] py-[1vh] rounded-[20px]">START THE PROJECT</h4> 
         <div id='arrowBtn' className='relative arrowBtn  text-white border-2 cursor-pointer px-[1.3vh] h-[5vh] w-[5vh] rounded-full flex justify-center items-center'> <FaArrowUpLong className="arrow  h-[4vh]  rotate-[45deg] bg-transparent z-10"/><div className='circle z-1 h-[100%] w-[100%] rounded-full bg-white absolute top-0 left-0 scale-0 z-1'></div></div>       
          </div>
        </div>
    </div>
  )
}

export default Hero