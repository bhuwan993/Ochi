import {useEffect,useRef} from 'react'
import gsap from 'gsap'

const Marquee = () => {
  const elements = useRef(null);
  useEffect (()=>{
        gsap.to('#elements',{
         x:'-100%',
         duration:50,
         repeat:-1,
         ease:"linear",
         // yoyo:true

        })
  },[])

  return (
     <div data-scroll data-scroll-section data-scroll-speed ='.6' className="marqueeContainer h-fit mt-[15vh] bg-[#004d43] overflow-hidden w-full rounded-tr-3xl rounded-tl-3xl">
         <div className="marquee flex flex-col bg-[#004d43] overflow-hidden">
            <hr  className="mt-[10vh]"/>
            <div ref={elements}  className="marqueeText whitespace-nowrap bg-[#004d43] flex overflow-hidden pt-[5vh] w-[4500vh]" id="elements">
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            <h1 className="text  text-white font-bold text-[50vh] pr-[4vh] leading-[50vh] bg-transparent tracking-tight font-['founderGrotesk']">WE ARE OCHI</h1>
            </div>
            <hr className="mb-[6vh] relative -top-[10vh]" />
         </div>
     </div>
  )
}

export default Marquee